import { useEffect, useState } from 'react';
import axios from 'axios';

function ListArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/produits")
      .then(res => {
        setArticles(res.data); // Assurez-vous que `res.data` contient bien la liste des articles
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Liste des articles</h2>
      {articles.length > 0 ? (
        <ul>
          {articles.map(article => (
            <li key={article.id}>{article.designation}</li>
          ))}
        </ul>
      ) : (
        <p>Aucun article trouvé.</p>
      )}
    </div>
  );
}

export default ListArticles;
