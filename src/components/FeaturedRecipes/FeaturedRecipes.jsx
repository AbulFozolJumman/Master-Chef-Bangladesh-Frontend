import React from 'react';

const FeaturedRecipes = () => {
    return (
        <div className=' container mx-auto'>
            <h2 className='text-center mb-4 fw-bold'>Featured Recipes</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://www.dhakafoodster.com/wp-content/uploads/2021/06/Sultan%E2%80%99s-Diner-Mirpur-Kacchi-Biriyani-1.jpg" className="card-img-top h-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Kacchi Biryani</h5>
                            <p className="card-text">Kacchi Biryani is one of the most popular dishes in South Asia, as well as among the diaspora from the region. Similar dishes are also prepared in other parts of the world such as in Iraq, Myanmar, Thailand, and Malaysia. Kacchi Biryani is the single most-ordered dish on Indian online food ordering and delivery services, and has been labelled as the most popular dish overall in India.</p>
                        </div>
                        <button className='btn btn-primary fw-bold'>Order Now</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://rumkisgoldenspoon.com/wp-content/uploads/2021/08/Shorshe-ilish.jpg" className="card-img-top h-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Shorshe Ilish</h5>
                            <p className="card-text">Shorshe ilish is a Bengali dish, native to the Bengal region of the Indian subcontinent, made from hilsa or Tenualosa ilisha, a type of herring, cooked in mustard gravy. The dish is popular among the people of Bangladesh where the fish is mainly found and in the neighbouring Indian states of West Bengal, Tripura and Assam.</p>
                        </div>
                        <button className='btn btn-primary fw-bold'>Order Now</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i0.wp.com/cookingcanary.com/wp-content/uploads/2021/05/beef-bhuna-serving.jpg?fit=600%2C800&ssl=1" className="card-img-top h-50" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Beef Bhuna</h5>
                            <p className="card-text">Beef bhuna is a glorious Bangladeshi curry much beloved of the British Curry house, easily identified by its delicious, spicy & thick sauce.</p>
                        </div>
                        <button className='btn btn-primary fw-bold'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRecipes;
