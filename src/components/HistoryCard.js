import { useContext, useEffect, useState } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UserContext from '../UserContext';
import { Link } from 'react-router-dom';



export default function HistoryCard({productProp}) {
	const { _id, firstName, lastName, totalAmount, purchasedOn } = productProp;

	const { user } = useContext(UserContext);

	return(
		<>
		<h2>Date</h2>
		{ purchasedOn }
		<h2>Total</h2>
		{ totalAmount }
		</>
		)

} 
