import React, { ReactElement, FC, JSX } from "react";

// define interface to represent component props
interface Props {
    title: String;
}
 
const Header = ({ title }: Props): JSX.Element => {
    return <div>{title}</div>;
};
 
export default Header;