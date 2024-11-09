import React from 'react';

function ElementsArticles({ articles }) {
    return (
        <div className="row">
            {
                articles && articles.length > 0 && articles.map((art) => (
                    <div key={art.id} className="col-sm-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={art.imageartpetitf} className="card-img-top" alt={art.designation} />
                            <div className="card-body">
                                <h5 className="card-title">{art.designation}</h5>
                                <p className="card-text">{art.caracteristiques}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Marque: {art.marque}</li>
                                <li className="list-group-item">Prix Achat: {art.prixAchat}</li>
                                <li className="list-group-item">Prix Vente: {art.prixVente}</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Modifier</a>
                                <a href="#" className="card-link">Supprimer</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ElementsArticles;
