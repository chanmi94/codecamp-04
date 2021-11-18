import { Navigation } from "./Navigation.styles";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "@emotion/styled";
import React from "react";
import {
  Breadcrumbs,
  Link,
  StyledBreadcrumb,
  HomeIcon,
  ExpandMoreIcon,
  handleClick,
} from "@material-ui/core";

export default function NavigationUI() {
  return (
    // <Breadcrumbs aria-label="breadcrumb">
    //   <StyledBreadcrumb
    //     component="a"
    //     href="#"
    //     label="Home"
    //     icon={<HomeIcon fontSize="small" />}
    //     onClick={handleClick}
    //   />
    //   <StyledBreadcrumb
    //     component="a"
    //     href="#"
    //     label="Catalog"
    //     onClick={handleClick}
    //   />
    //   <StyledBreadcrumb
    //     label="Accessories"
    //     deleteIcon={<ExpandMoreIcon />}
    //     onClick={handleClick}
    //     onDelete={handleClick}
    //   />
    // </Breadcrumbs>
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        color="inherit"
        href="/boards/"
        onClick={handleClick}
        style={{ color: "black", fontSize: "29px" }}
      >
        자유게시판
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        style={{ color: "black", fontSize: "29px" }}
      >
        중고마켓
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        style={{ color: "black", fontSize: "29px" }}
        aria-current="page"
      >
        마이페이지
      </Link>
    </Breadcrumbs>
  );
}
