import { useParams } from "react-router-dom";
import ArticleDetail from "./Articledetail";

const ArticleDetailWrapper = () => {
  const { id } = useParams();
  return <ArticleDetail articleId={id} />;
};

export default ArticleDetailWrapper;
