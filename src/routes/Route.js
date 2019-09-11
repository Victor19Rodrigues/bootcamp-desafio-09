import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

// component pode ser uma função ou uma classe.
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

//  Por padrão, isPrivate é falso e não é obrigatório.
//  Como ela não é obrigatória, é necessário criar esse defaultProps
RouteWrapper.defaultProps = {
  isPrivate: false
};
