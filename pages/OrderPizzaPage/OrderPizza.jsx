import React, { useState } from 'react'

import './orderPizza.css'
import logo from '../../Assets/mile1-assets/logo.svg'

function OrderPizza() {

    const [pizzaSize, setPizzaSize] = useState(0);
    const [doughType, setDoughType] = useState(0);

    // input radio için

    const handleSizeChange = (value) => {
        setPizzaSize(value);
    }





    return (
        <>
            <div id="orderPizza">
                <header>
                    <img src={logo} />
                    <div id="links">
                        <a href='/'>Anasayfa - </a>
                        <a href='#'><b>Sipariş Oluştur</b></a>
                    </div>
                </header>
                <section id="orderForm">
                    <div id="pizzaName"><b> Position Absolute Acı Pizza</b> </div>
                    <div id="priceRating">
                        <div id="price">85.50₺</div>
                        <div id="ratings">
                            <div id="rating">4.9
                            </div>
                            <div id="commend">(200)
                            </div>
                        </div>
                    </div>
                    <div id="description"> Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</div>

                    <div>
                        <form action="">

                            <div>
                                <div id="pizzaSize">
                                    <div>
                                        <b>Boyut Seç*</b>
                                    </div>

                                    <div>
                                        <input id="small" name="small" type="radio" checked={pizzaSize === 1} onChange={() => handleSizeChange(1)} />
                                        Küçük
                                    </div>
                                    <div>
                                        <input id="medium" name="medium" type="radio" checked={pizzaSize === 2} onChange={() => handleSizeChange(2)} />
                                        Orta
                                    </div>
                                    <div>
                                        <input id="large" name="large" type="radio" checked={pizzaSize === 3} onChange={() => handleSizeChange(3)} />
                                        Büyük
                                    </div>
                                </div>
                                <div id="pizzaDough">

                                    <div>
                                        <b>Hamur Seç*</b>
                                    </div>
                                    <select onChange={(e) => setDoughType(e.target.value)}>
                                        <option value={0}>Hamur Kalınığı
                                        </option>
                                        <option value={1}>İnce Hamur
                                        </option>
                                        <option value={2}>Kalın Hamur
                                        </option>
                                    </select>


                                </div>
                            </div>


                        </form>
                    </div>


                </section>











            </div>

        </>
    )
}

export default OrderPizza