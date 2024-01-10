import React from 'react'

const ProdcutItem = () => {
  return (
    <div className="col-md-4">
                <div className="p-lg-5 p-4 shadow">
                    <div className="lc-block mb-4"><img alt="" className="img-fluid" src="https://source.unsplash.com/random/300x300/?Burger" />


                        <h4 className="my-3" editable="inline">Jambo Burger</h4>
                        <p editable="inline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est.&nbsp;</p>
                        <h3>Rs. 70</h3>

                        <a className="btn btn-outline-primary mt-4" href="#" role="button">Add To Cart</a>
                    </div>
                </div>
            </div>
  )
}

export default ProdcutItem