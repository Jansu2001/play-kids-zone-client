import { TabPanel } from "react-tabs";

const TabCard = () => {
    return (
        <div>
            <TabPanel>
                <div className="flex justify-around">
                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Toy Name</h2>
                                <h2 className="card-title">Price: $120</h2>
                                <h2 className="card-title">Rating: 4.5</h2>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Toy Name</h2>
                                <h2 className="card-title">Price: $120</h2>
                                <h2 className="card-title">Rating: 4.5</h2>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </div>
    );
};

export default TabCard;