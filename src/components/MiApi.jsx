import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MiApi() {

    const [monedas, setMonedas] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [monedasFiltrada, setMonedasFiltrada] = useState([]);
    const [cantidadMonedas, setCantidadMonedas] = useState(0);

    useEffect(() => {
        getCoins();
    }, []);

    const getCoins = async () => {
        const res = await fetch("https://api.gael.cloud/general/public/monedas")
        const monedas = await res.json();
        monedas.sort((a, b) => a.Nombre > b.Nombre ? 1 : -1);
        setMonedas(monedas);
        setMonedasFiltrada(monedas);
    };

    const filtrarMonedas = () => {
        const monedasFiltrada = monedas.filter((moneda) => {
            return moneda.Nombre.toUpperCase().includes(busqueda.toUpperCase());
        });
        setMonedasFiltrada(monedasFiltrada);
    };

    useEffect(() => {
        filtrarMonedas();
    }, [busqueda]);

    return (
        <>
            <div>
                <table className="table table-striped table-hover mt-5 shadow-lg">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Valor</th>
                        </tr>

                    </thead>
                    <tbody>
                        {monedasFiltrada.map((moneda) =>
                            <tr>
                                <td>{moneda.Codigo}</td>
                                <td>{moneda.Nombre}</td>
                                <td>{moneda.Valor}</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
            <hr />
            <form className="form text-center">
                <div className="mb-3">

                    <label for="exampleInputEmail1" className="form-label">Ingresa la moneda a revisar</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setBusqueda(e.target.value)}
                        placeholder="Buscar Moneda" />

                    <h4>Ingresar la cantidad a calcular</h4>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setCantidadMonedas(e.target.value)}
                        placeholder="Ingresa la cantidad a calcular" />

                    <div id="texto" className="form-text">El resultado expresado a continuación es el valor de la moneda seleccionada por la cantidad </div>
                </div>
                <button type="submit" className="btn btn-primary">Recargar</button>

                {monedasFiltrada.map((moneda) => monedasFiltrada.length === 1 ? <h2>Resultado:$ {parseFloat(moneda.Valor)*cantidadMonedas}</h2>:null)}

            </form>
        </>
    )
}
export default MiApi;