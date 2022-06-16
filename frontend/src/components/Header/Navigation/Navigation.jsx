import React from "react";
import { Link } from "react-router-dom";
import style from './Navigation.module.css'
import {  NavDropdown } from "react-bootstrap";

const Navigation = () => {
    return (
        <nav className={style.navigation} >
            <ul>

            <li>
                    <Link to='/'>Home</Link>
                </li>
            <NavDropdown title="Adicionar Categorias" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/marca">
                  Adicionar Marcas
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/regioe">
                  Adicionar Estados
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/tamanhos">
                  Adicionar Tamnhos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/produtos">
                  Adicionar Produtos
                  </NavDropdown.Item>
                </NavDropdown>
          
                <NavDropdown title="Visão de Cadastros" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/listagemMarcas">
                    Listagem Marcas
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/listagemRegiao">
                    Listagem Estados
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/listagemTamanhos">
                    Listagem Tamanhos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/listagemProdutos">
                    Listagem Produtos
                  </NavDropdown.Item>
                </NavDropdown>
            </ul>
        </nav>
    )
}

export default Navigation