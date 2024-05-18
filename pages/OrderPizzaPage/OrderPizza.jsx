import React, { useState, useEffect } from 'react'

import './orderPizza.css'
import logo from '../../Assets/mile1-assets/logo.svg'

function OrderPizza() {

    const [pizzaSize, setPizzaSize] = useState(0);
    const [doughType, setDoughType] = useState(0);
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
    const [count, setCount] = useState(1);

    // input radio için

    const handleSizeChange = (value) => {
        setPizzaSize(value);
    }

    // textarea dinle settexte aktar
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleTextAreaClick = () => {
        setIsPlaceholderVisible(false);
    };


    // arttır azalt kısmı için
    const incrementCount = (e) => {
        e.preventDefault();
        setCount(count + 1);
    };

    const decrementCount = (e) => {
        e.preventDefault();
        setCount(count - 1);
    };

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

                            <div id="pizzaSizeDough">
                                <div id="pizzaSize">
                                    <div>
                                        <b>Boyut Seç*</b>
                                    </div>

                                    <div>
                                        <label htmlFor="small" className='labelSize'>
                                            <input id="small" name="small" type="radio" checked={pizzaSize === 1} onChange={() => handleSizeChange(1)} />
                                            Küçük
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="medium" className='labelSize'>
                                            <input id="medium" name="medium" type="radio" checked={pizzaSize === 2} onChange={() => handleSizeChange(2)} />
                                            Orta
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="large" className='labelSize'>
                                            <input id="large" name="large" type="radio" checked={pizzaSize === 3} onChange={() => handleSizeChange(3)} />
                                            Büyük
                                        </label>
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
                            <div>
                                <div id="materials"><b>Ek Malzemeler</b></div>
                                <div id="materialsPriseİnfo">En Fazla 10 malzeme seçebilirsiniz. 5₺</div>
                                <div id="pizzaMaterials">
                                    <label>
                                        <input type="checkbox" />
                                        Pepperoni
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Sosis
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Kanada Jambonu
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Tavuk Izgara
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Soğan
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Domates
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Mısır
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Sucuk
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Jalepeno
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Sarımsak
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Biber
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Salam
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Ananas "cidden mi ?"
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        Kabak
                                    </label>
                                </div>
                            </div>
                            <div id="orderNote">
                                <div>
                                    <b>Sipariş Notu</b>
                                </div>
                                <div >
                                    <input id="orderNoteTextArea" type="text" value={text}
                                        onChange={handleChange} onClick={handleTextAreaClick} placeholder={isPlaceholderVisible ? "Siparişine eklemek istediğin bir not var mı?" : ""} />

                                </div>
                                <hr className="line"></hr>
                            </div>
                            <div id="countOrderContainer">
                                <div id="countcontainer">
                                    <button className="arttırAzalt" onClick={decrementCount} disabled={count === 1} >-</button>
                                    <div className="count" >{count}</div>
                                    <button className="arttırAzalt" onClick={incrementCount}>+</button>
                                </div>
                                <div id="orderTotal">
                                    <p></p>
                                    <p></p>

                                    <a id="orderBtn" href='/success'>SİPARİŞ VER</a>
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