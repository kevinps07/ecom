import React from "react"
import '../css/presets.css'
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Nav } from "react-bootstrap"
import Navs from "../components/Navs"

export default function admin() {
  return (
    <Layout>
      <Col md={12}>
        <Navs
          class={'justify-content-between'}
          to={"/"}
          expand={"lg"}
          brandValue={"MinhaEmpresa"}
          bg={"primary"}
          variant={"dark"}
          navlinks={[
            <Nav.Link href="/">inicio</Nav.Link>,
            <Nav.Link href="/cadastrar">Cadastre-se</Nav.Link>
          ]}
        ></Navs>
      </Col>
      <Col md={12}>
        <h1>Cadastro</h1>
      </Col>
    </Layout>
  )
}
