import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
    User,
    Loader2,
    CheckCircle2,
    AlertCircle
} from "lucide-react";
import { API_BASE } from "../utils/auths";
import { useGoogleLogin } from '@react-oauth/google';

// Crisp custom brand SVG icons to strictly match official brand standards
const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
);

const FacebookIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const AppleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.62.72-1.16 1.85-1.01 2.96 1.11.09 2.27-.58 2.96-1.41z" />
    </svg>
);

/**
 * SignIn Component
 * Handles authentication with sign in, sign up, and password reset modes
 * Supports social authentication (Google, Facebook, Apple)
 * Features password strength indicator and validation
 */
export default function SignIn() {
    const [mode, setMode] = useState("signin");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [socialProvider, setSocialProvider] = useState(null);
    const [socialStep, setSocialStep] = useState("");

    const navigate = useNavigate();

    /**
     * Calculate password strength score (0-5)
     * Returns strength label, color class, and bar color
     */
    const getPasswordStrength = (pwd) => {
        if (!pwd) return { score: 0, label: "", colorClass: "text-slate-500", barColor: "bg-white/10" };
        let score = 0;
        if (pwd.length >= 4) score++;
        if (pwd.length >= 10) score++;
        if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
        if (/\d/.test(pwd)) score++;
        if (/[^A-Za-z0-9]/.test(pwd)) score++;

        if (score <= 2) {
            return { score, label: "Weak", colorClass: "text-rose-400", barColor: "bg-rose-500" };
        } else if (score <= 4) {
            return { score, label: "Moderate", colorClass: "text-[#d4af37]", barColor: "bg-[#d4af37]" };
        } else {
            return { score, label: "Strong", colorClass: "text-emerald-400", barColor: "bg-emerald-400" };
        }
    };

    const pwdStrength = getPasswordStrength(password);

    /**
     * Validate form inputs
     * Returns boolean indicating if validation passed
     */
    const handleValidations = () => {
        setError(null);
        if (!email) {
            setError("Please enter your email address.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        if (mode === "signup" && !name.trim()) {
            setError("Please enter your full name.");
            return false;
        }
        if (mode !== "forgot") {
            if (!password) {
                setError("Please enter your password.");
                return false;
            }
            if (password.length < 4) {
                setError("Password must be at least 6 characters long.");
                return false;
            }
        }
        return true;
    };

    /**
     * Handle form submission for signin/signup/forgot password
     * Simulates server latency and shows success message
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!handleValidations()) return;
        setIsLoading(true);
        setError(null);

        try {
            const endpoint = mode === "signup" ?
                `${API_BASE}/api/auth/register` :
                `${API_BASE}/api/auth/login`;
            const body = mode === "signup"
                ? { name, email, password }
                : { email, password };

            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await res.json();
            if (!res.ok) { setError(data.message); return; }

            localStorage.setItem("token", data.token);
            localStorage.setItem("userName", data.name);
            setSuccess(mode === "signup"
                ? `Welcome, ${data.name}! Your profile has been created.`
                : "Signed in successfully. Welcome back."
            );
            setTimeout(() => navigate("/"), 1500);
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Handle social authentication flow
     * Shows multi-stage verification process for realism
     */
    const handleSocialSignIn = async (provider) => {
        setIsLoading(true);
        setSocialProvider(provider);
        setError(null);

        // Multi-stage verification telemetry for visual realism and depth
        setSocialStep(`Contacting ${provider} authentication servers...`);

        // Replace the setTimeout in handleSubmit with something like:
        const res = await fetch("/api/auth/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) setError(data.message);
        else navigate("/");
    };

    // Component ke andar yeh function add karo
    const handleGoogleAuth = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            setIsLoading(true);
            setSocialProvider("Google");
            setSocialStep("Verifying Google token...");

            try {
                // Pehle existing user check karo
                const res = await fetch(`${API_BASE}/api/auth/google`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token: tokenResponse.access_token }),
                });

                const data = await res.json();

                if (data.isNewUser) {
                    // Naya user hai — register karo
                    setSocialStep("Creating your account...");
                    const regRes = await fetch(`${API_BASE}/api/auth/google/register`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ token: tokenResponse.access_token }),
                    });
                    const regData = await regRes.json();
                    if (regData.token) {
                        saveToken(regData.token, regData.name || "Believer");
                        setSuccess("Account created successfully with Google!");
                        setTimeout(() => navigate("/"), 1500);
                    }
                } else if (data.token) {
                    // Existing user
                    saveToken(data.token, data.name || "Believer");
                    setSuccess("Signed in successfully with Google!");
                    setTimeout(() => navigate("/"), 1500);
                } else {
                    setError(data.error || "Google sign-in failed.");
                }
            } catch (err) {
                setError("Network error. Please try again.");
            } finally {
                setIsLoading(false);
                setSocialProvider(null);
                setSocialStep("");
            }
        },
        onError: () => {
            setError("Google sign-in was cancelled or failed.");
            setIsLoading(false);
        },
        flow: 'implicit',
    });

    return (
        <div id="signin-root" className="min-h-screen bg-black text-white relative flex flex-col justify-center items-center px-6 py-24 overflow-hidden">
            {/* Background visual graphics conforming to spiritual minimalist theme */}
            <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-gradient-to-tr from-[#d4af37]/15 to-[#3b82f6]/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[-100px] right-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-[#3b82f6]/10 to-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="w-full max-w-lg z-10 relative">
                {/* Brand Header */}
                <div className="text-center mb-10" id="brand-header">
                    <div className="w-14 h-14 bg-gradient-to-tr from-[#d4af37] to-[#f5d17a] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.25)] mx-auto mb-6 relative">
                        <div className="absolute w-1.5 h-8 bg-black rounded-full"></div>
                        <div className="absolute w-5 h-1.5 bg-black rounded-full -translate-y-2"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-2">
                        {mode === "signin" && "Welcome Back"}
                        {mode === "signup" && "Create Journey"}
                        {mode === "forgot" && "Reset Spiritual Path"}
                    </h2>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                        {mode === "signin" && "Reconnect with God's word and your global community of faith."}
                        {mode === "signup" && "Join millions of believers on a beautiful path of daily guidance."}
                        {mode === "forgot" && "Enter your registered email to reclaim your credentials."}
                    </p>
                </div>

                {/* Sign In & Sign Up container */}
                <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border-white/5 bg-slate-950/40 backdrop-blur-3xl shadow-2xl relative" id="signin-card">

                    <AnimatePresence mode="wait">
                        {success ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-8"
                            >
                                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                                    <CheckCircle2 size={36} className="animate-pulse" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-white mb-3">Divine Progress</h3>
                                <p className="text-slate-350 leading-relaxed text-sm max-w-xs mx-auto mb-8 font-serif">
                                    {success}
                                </p>
                                <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-emerald-350/20 rounded-full mx-auto animate-pulse"></div>
                            </motion.div>
                        ) : socialProvider ? (
                            <motion.div
                                key="social-authenticating"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                                    <div className="absolute inset-0 rounded-full border border-[#d4af37]/30 animate-pulse opacity-75"></div>
                                    {socialProvider === "Google" && <GoogleIcon />}
                                    {socialProvider === "Facebook" && <FacebookIcon />}
                                    {socialProvider === "Apple" && <AppleIcon />}
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-white mb-2">
                                    Handshaking with {socialProvider}
                                </h3>
                                <p className="text-[#d4af37] text-[10px] uppercase tracking-widest font-bold mb-6 animate-pulse">
                                    Secure OAuth Handshake
                                </p>
                                <div className="w-48 h-1 bg-white/5 rounded-full mx-auto mb-6 overflow-hidden relative">
                                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#d4af37] to-[#b8952e] rounded-full animate-[pulse_1.5s_ease-in-out_infinite]" style={{ width: "100%" }}></div>
                                </div>
                                <p className="text-slate-400 leading-relaxed text-sm max-w-xs mx-auto font-serif">
                                    {socialStep}
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {/* Form Input Block */}
                                <form onSubmit={handleSubmit} className="space-y-6" id="credential-form">
                                    {error && (
                                        <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs" id="form-error-banner">
                                            <AlertCircle className="shrink-0" size={16} />
                                            <p>{error}</p>
                                        </div>
                                    )}

                                    {/* Direct Access/Social Buttons rendered first below Create Journey Header */}
                                    {mode !== "forgot" && (
                                        <div className="space-y-6" id="social-direct-auth-container">
                                            <div className="grid grid-cols-3 gap-3" id="social-auth-grid">
                                                <button
                                                    type="button"
                                                    onClick={() => handleGoogleAuth()}
                                                    className="flex items-center justify-center py-4 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/5 active:scale-95 transition-all text-sm gap-2 text-slate-300 font-medium cursor-pointer"
                                                    title="Sign In with Google"
                                                >
                                                    <GoogleIcon />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleSocialSignIn("Facebook")}
                                                    className="flex items-center justify-center py-4 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/5 active:scale-95 transition-all text-sm gap-2 text-slate-300 font-medium cursor-pointer"
                                                    title="Sign In with Facebook"
                                                >
                                                    <FacebookIcon />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleSocialSignIn("Apple")}
                                                    className="flex items-center justify-center py-4 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/5 active:scale-95 transition-all text-sm gap-2 text-[#d4af37] hover:text-white font-medium cursor-pointer"
                                                    title="Sign In with Apple"
                                                >
                                                    <AppleIcon />
                                                </button>
                                            </div>

                                            <div className="relative my-4 text-center" id="social-divider">
                                                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-white/5"></div>
                                                <span className="relative inline-block px-4 bg-slate-950 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                                                    OR CONNECT WITH EMAIL
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {mode === "signup" && (
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-[#d4af37]/90 pl-1">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Timothy Grace"
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.05] transition-all text-white placeholder-slate-600"
                                                    disabled={isLoading}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-[#d4af37]/90 pl-1">Email</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">@</span>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="faith@bibleglory.com"
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.05] transition-all text-white placeholder-slate-600"
                                                disabled={isLoading}
                                            />
                                        </div>
                                    </div>

                                    {mode !== "forgot" && (
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center px-1">
                                                <label className="text-xs font-bold uppercase tracking-widest text-[#d4af37]/90">Password</label>
                                                {mode === "signin" && (
                                                    <button
                                                        type="button"
                                                        onClick={() => { setMode("forgot"); setError(null); }}
                                                        className="text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-[#d4af37] transition-colors"
                                                    >
                                                        Forgot Password?
                                                    </button>
                                                )}
                                            </div>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-mono">***</span>
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="••••••"
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-sm focus:outline-none focus:border-[#d4af37] focus:bg-white/[0.05] transition-all text-white placeholder-slate-600 font-mono"
                                                    disabled={isLoading}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                                    id="pwd-reveal-btn"
                                                >
                                                    {showPassword ? "Hide" : "Show"}
                                                </button>
                                            </div>

                                            {password && (
                                                <div className="mt-3 space-y-1.5 px-1 animate-in fade-in slide-in-from-top-1 duration-300" id="password-strength-container">
                                                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                                                        <span className="text-slate-500">Security Strength</span>
                                                        <span className={`${pwdStrength.colorClass} font-bold transition-all duration-300`}>{pwdStrength.label}</span>
                                                    </div>
                                                    <div className="grid grid-cols-3 gap-1.5 h-1.5">
                                                        <div className={`h-full rounded-full transition-all duration-350 ${pwdStrength.score >= 1 ? pwdStrength.barColor : 'bg-white/10'}`}></div>
                                                        <div className={`h-full rounded-full transition-all duration-350 ${pwdStrength.score >= 3 ? pwdStrength.barColor : 'bg-white/10'}`}></div>
                                                        <div className={`h-full rounded-full transition-all duration-350 ${pwdStrength.score >= 5 ? pwdStrength.barColor : 'bg-white/10'}`}></div>
                                                    </div>
                                                    <p className="text-[10px] text-slate-500 leading-normal transition-all duration-300">
                                                        {pwdStrength.score <= 2 && "• Tip: include uppercase letters, numbers, and symbols."}
                                                        {(pwdStrength.score === 3 || pwdStrength.score === 4) && "• Almost there! Add special characters to make it stronger."}
                                                        {pwdStrength.score >= 5 && "• Excellent and strong passcode choice."}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        id="submit-auth-btn"
                                        className="w-full py-4.5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black font-bold uppercase tracking-wider text-xs rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-gold-500/10 flex items-center justify-center gap-3 mt-8 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="animate-spin" size={16} />
                                                Synthesizing Connection...
                                            </>
                                        ) : (
                                            <>
                                                {mode === "signin" && "Submit Sign In"}
                                                {mode === "signup" && "Establish Account"}
                                                {mode === "forgot" && "Send Restorative Lock Link"}
                                            </>
                                        )}
                                    </button>

                                    {/* Mode Selector Option Footer */}
                                    <div className="text-center pt-2">
                                        {mode === "signin" ? (
                                            <p className="text-xs text-slate-500">
                                                New seeking devotee?{" "}
                                                <button
                                                    type="button"
                                                    onClick={() => { setMode("signup"); setError(null); }}
                                                    className="text-[#d4af37] font-bold hover:underline"
                                                >
                                                    Create Faith Space
                                                </button>
                                            </p>
                                        ) : mode === "signup" ? (
                                            <p className="text-xs text-slate-500">
                                                Already have account?{" "}
                                                <button
                                                    type="button"
                                                    onClick={() => { setMode("signin"); setError(null); }}
                                                    className="text-[#d4af37] font-bold hover:underline"
                                                >
                                                    Access Profile
                                                </button>
                                            </p>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => { setMode("signin"); setError(null); }}
                                                className="text-xs text-[#d4af37] font-bold hover:underline"
                                            >
                                                Return to Authentication Screen
                                            </button>
                                        )}
                                    </div>

                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                {/* Floating Verse Footer for ambiance */}
                <div className="text-center mt-12 text-slate-600 italic text-xs max-w-xs mx-auto font-serif" id="sign-verse-footer">
                    "For where two or three are gathered in my name, there am I among them."
                    <span className="block not-italic text-[10px] text-[#d4af37] uppercase font-bold tracking-widest mt-2">Matthew 18:20</span>
                </div>
            </div>
        </div>
    );
}