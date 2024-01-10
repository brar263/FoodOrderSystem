import React from 'react'

const ProdcutItem = (props) => {
  return (
    <div className="col-md-4">
                <div className="p-lg-5 p-4 shadow">
                    <div className="lc-block mb-4"><img alt="" className="img-fluid" src={props.img} />


                        <h4 className="my-3" editable="inline">{props.title}</h4>
                        <p editable="inline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est.&nbsp;</p>
                        <h3>{props.price}</h3>

                        <a className="btn btn-outline-primary mt-4" href="#" role="button">{props.card}</a>
                    </div>
                </div>
            </div>
  )
}

export default ProdcutItem

// "https://source.unsplash.com/random/300x300/?Burger"