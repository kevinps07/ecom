import React from "react"
import Layout from "../components/layout"
import '../css/presets.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Nav } from "react-bootstrap"
import Navs from "../components/Navs"

export default function Home() {
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
        <h1>Home</h1>
      </Col>
    </Layout>
  )
}
