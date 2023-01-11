import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

function DishDetail(props) {
    const dish = props.dish;
    
    if(dish != null) {
        const comments = dish.comments;
        const renderComments = comments.map((comment) => {
            return(
                <>
                    <div className="row">
                        {comment.comment}
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 m-1">{comment.author}</div>
                        <div className="col-12 col-md-7 m-1">{comment.date}</div>
                    </div>
                </>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5">
                        {renderComments}
                    </div>
                </div>
            </div>
            
        )
    } else {
        return(
            <div></div>
        )
    }
}
export default DishDetail;