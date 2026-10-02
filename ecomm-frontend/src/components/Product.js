import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating';

const Product = ({ product }) => {
    return (
        <Card className="rounded h-100 d-flex flex-column">
            <Link to={`/products/${product._id}`}>
                <Card.Img
                    src={product.image}
                    variant='top'
                    style={{ height: '200px', objectFit: 'cover' }}
                />
            </Link>

            <Card.Body className="d-flex flex-column p-3">
                <Link to={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                    <Card.Title as='div' className="mb-2" style={{ minHeight: '3rem' }}>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <div className="mt-auto">
                    <Card.Text as='div' className="mb-2">
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} review${product.numReviews !== 1 ? 's' : ''}`}
                        />
                    </Card.Text>
                    <Card.Text as='h3' className="mb-0">
                        ${product.price}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Product
