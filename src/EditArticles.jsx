import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditArticle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [reference, setReference] = useState("");
    const [designation, setDesignation] = useState("");
    const [marque, setMarque] = useState("");
    const [prixAchat, setPrixAchat] = useState("");
    const [prixVente, setPrixVente] = useState("");
    const [qtestock, setQtestock] = useState("");
    const [imageartpetitf, setImageartpetitf] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/produits/${id}`)
            .then(res => {
                const product = res.data;
                setReference(product.reference);
                setDesignation(product.designation);
                setMarque(product.marque);
                setPrixAchat(product.prixAchat);
                setPrixVente(product.prixVente);
                setQtestock(product.qtestock);
                setImageartpetitf(product.imageartpetitf);
            })
            .catch(error => {
                console.error(error);
                alert("Erreur lors de la récupération des données");
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = {
            reference,
            designation,
            marque,
            prixAchat,
            prixVente,
            qtestock,
            imageartpetitf
        };

        // Mettre à jour l'article dans la base de données
        axios.put(`http://localhost:3001/produits/${id}`, updatedProduct)
            .then(res => {
                console.log(res);
                navigate("/"); // Redirige vers la liste des articles
            })
            .catch(error => {
                console.error(error);
                alert("Erreur lors de la mise à jour !");
            });
    };

    return (
        <div className="container">
            <h2>Modifier le produit</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-3">
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control" placeholder="Référence" type="text" value={reference} onChange={e => setReference(e.target.value)} />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control" placeholder="Désignation" type="text" value={designation} onChange={e => setDesignation(e.target.value)} />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control" placeholder="Marque" type="text" value={marque} onChange={e => setMarque(e.target.value)} />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control" placeholder="Prix Achat" type="number" value={prixAchat} onChange={e => setPrixAchat(e.target.value)} />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control" placeholder="Prix Vente" type="number" value={prixVente} onChange={e => setPrixVente(e.target.value)} />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control" placeholder="Quantité" type="number" value={qtestock} onChange={e => setQtestock(e.target.value)} />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input className="form-control" placeholder="Image" type="text" value={imageartpetitf} onChange={e => setImageartpetitf(e.target.value)} />
                    </div>
                    <div>{imageartpetitf ? <img src={imageartpetitf} alt="" width="70" /> : null}</div>
                    <div>
                        <button className="btn btn-success">Valider</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditArticle;
