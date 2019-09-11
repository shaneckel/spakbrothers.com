import React from 'react'
import Head from 'next/head'

const Home = () => {

  if (process.browser) {
    let lastScrollY = 0;
    let ticking = !1;
    
    function scrollSwag () {
      lastScrollY = window.pageYOffset, requestTick()
    }

    function requestTick () {
      ticking || (window.requestAnimationFrame(updatePosition), ticking = !0)
    }

    function updateNav (e) {
      Array.prototype.forEach.call(document.querySelectorAll("nav > a"), function(e) {
        e.classList.remove("active")
      }), e.classList.add("active")
    }

    function lup (linkArray){
      Array.prototype.forEach.call(linkArray, function(nameId) {
        100 * Math.ceil((document.querySelectorAll("#" + nameId)[0].offsetTop - 200) / 100) === 100 * Math.ceil(lastScrollY / 100) && updateNav(document.querySelectorAll(".l" + nameId)[0]);
      })
    }

    function updatePosition () {
      let link = ['phone', 'location', 'hours', 'pizza', 'specialty', 'toppings', 'hoagies', 'wings', 'salads', 'calzones']
      lup(link)
      ticking = !1;
    }

    function trans (e) {
      Array.prototype.forEach.call(document.querySelectorAll("nav > a"), function(e) {
        e.classList.remove("active")
      }),
      e.target.classList.add("active")
      if(!e.target.classList.contains("menu")){
        console.log(document.querySelectorAll(".menu"))
        document.querySelectorAll(".menu")[0].text = "menu"
        document.querySelectorAll("nav")[0].classList.toggle("flip")
      }else{
        console.log("do nothing");
      }
    };

    document.querySelectorAll(".menu")[0].addEventListener("click", function(e) {
      e.preventDefault(),
      e.target.text =
        document.querySelectorAll("nav")[0].classList.contains("flip")
          ? "menu"
          : "close menu",
        document.querySelectorAll("nav")[0].classList.toggle("flip")
    }),

    window.addEventListener("scroll", scrollSwag, !1),
    document.querySelectorAll("nav")[0].addEventListener("click", trans, !1)
  }

  return (
    <div>
      <Head>
        <title>Spak Brothers. Pittsburgh's Finest Pizza Shop.</title>
      	<meta name="viewport" content="width=device-width" />
      	<meta content="Spak Brothers Pizza Shop in the Pittsburgh, Pa." name="description" />
      	<meta content="Spak Brothers" name="author" />
        <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6038632/674144/css/fonts.css" />
      	<link href="static/css/main.css" rel="stylesheet" />
      	<meta name="theme-color" content="#231f20" />
        <script
          dangerouslySetInnerHTML={{
          __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          	ga('create', 'UA-17701242-7', 'auto');
          	ga('send', 'pageview');
            `,
          }} />
        <meta property="og:url" content="https://www.spakbrothers.com" />
      	<meta property="og:title" content="Spak Brothers" />
      	<meta property="og:description" content="Pittsburgh's Finest Pizza Shop." />
      	<meta property="og:image" content="static/img/fb_share.png" />
      	<link rel="apple-touch-icon" sizes="57x57" href="static/img/apple-icon-57x57.png" />
      	<link rel="apple-touch-icon" sizes="60x60" href="static/img/apple-icon-60x60.png" />
      	<link rel="apple-touch-icon" sizes="72x72" href="static/img/apple-icon-72x72.png" />
      	<link rel="apple-touch-icon" sizes="76x76" href="static/img/apple-icon-76x76.png" />
      	<link rel="apple-touch-icon" sizes="114x114" href="static/img/apple-icon-114x114.png" />
      	<link rel="apple-touch-icon" sizes="120x120" href="static/img/apple-icon-120x120.png" />
      	<link rel="apple-touch-icon" sizes="144x144" href="static/img/apple-icon-144x144.png" />
      	<link rel="apple-touch-icon" sizes="152x152" href="static/img/apple-icon-152x152.png" />
      	<link rel="apple-touch-icon" sizes="180x180" href="static/img/apple-icon-180x180.png" />
      	<link rel="icon" type="image/png" sizes="192x192"  href="static/img/android-icon-192x192.png" />
      	<link rel="icon" type="image/png" sizes="32x32" href="static/img/favicon-32x32.png" />
      	<link rel="icon" type="image/png" sizes="96x96" href="static/img/favicon-96x96.png" />
      	<link rel="icon" type="image/png" sizes="16x16" href="static/img/favicon-16x16.png" />
      	<link rel="manifest" href="static/manifest.json" />
      	<meta name="msapplication-TileColor" content="#231f20" />
      	<meta name="msapplication-TileImage" content="static/img/ms-icon-144x144.png" />
      	<meta name="theme-color" content="#231f20" />
      </Head>
      <nav>
         <a href="#phone" className="lphone">phone</a>
         <a href="#location" className="llocation">location</a>
         <a href="#hours" className="lhours">hours</a>
         <a href="#pizza" className="lpizza">pizza</a>
         <a href="#toppings" className="ltoppings">toppings</a>
         <a href="#specialty" className="lspecialty">specialty pizza</a>
         <a href="#hoagies" className="lhoagies">hoagies</a>
         <a href="#wings" className="lwings">wings & sides</a>
         <a href="#salads" className="lsalads">salads</a>
         <a href="#calzones" className="lcalzones">calzones</a>
         <a href="" className="menu">menu</a>
      </nav>

      <main>
        <header>
          <img src="static/img/header-full.png" alt="Spak Brothers Pizza" />
          <h3>We are closed September 1st, 2nd, and 3rd.</h3>
        </header>

        <section id="phone" className="phone">
          <h2><a href="tel:4123627725">412-362-SPAK (7725)</a></h2>
          <h3>Limited Business Delivery Only</h3>
        </section>

        <section id="location" className="location">
          <img src="static/img/hoagie-divider.png" alt="divider" />
          <h2><a href="http://maps.google.com/maps?f=q&amp;amp;hl=en&amp;amp;geocode=&amp;amp;q=5107+Penn+Avenue,+Pittsburgh+Pa&amp;amp;sll=40.473018,-79.953524&amp;amp;sspn=0.041722,0.111494&amp;amp;ie=UTF8&amp;amp;ll=40.465552,-79.942542&amp;amp;spn=0.005477,0.013937&amp;amp;z=17" target="_new">5107 Penn Avenue</a></h2>
          <h3>Pittsburgh, Pa</h3>
        </section>

        <section id="hours" className="hours">
          <h2>Hours</h2>
          <div>
            <h5>11a - 10p</h5>
            <h4>MON - THURS</h4>
          </div>
          <div>
            <h5>11a - 11p</h5>
            <h4>FRIDAY</h4>
          </div>
          <div>
            <h5>12p - 11p</h5>
            <h4>SATURDAY</h4>
          </div>
          <div>
            <h5>3p - 10p</h5>
            <h4>SUNDAY</h4>
          </div>
        </section>

        <section id="pizza" className="pizza">
          <img src="static/img/pizza-full.png" alt="Pizza" />

          <h2>18" xl • 12 cut – <sup>$</sup>13.49</h2>
          <h3>Toppings <sup>$</sup>2 each</h3>

          <h2>14" lg • 8 cut – <sup>$</sup>10.49</h2>
          <h3>Toppings <sup>$</sup>1.75 each</h3>

          <h2>10" sm • 6 cut – <sup>$</sup>7.99</h2>
          <h3>Toppings <sup>$</sup>1.50 each</h3>

          <h2>Single slice – <sup>$</sup>2</h2>
          <h3>Toppings <sup>$</sup>.50 each</h3>
        </section>

        <section id="toppings" className="toppings">
          <img src="static/img/toppings-full.png" alt="Pizza Toppings" />
          <h3>Buy 3 Toppings and get the 4th free.</h3>
          <p className="note">*Double Toppings (excluded)</p>
          <ul>
            <li className="header">Veggies</li>
            <li>Green Pepper</li>
            <li>Onion</li>
            <li>Fresh Mushroom</li>
            <li>Banana Pepper</li>
            <li>Japapeño Pepper</li>
            <li>Black Olive</li>
            <li>Roasted Tomato</li>
            <li>Pineapple</li>
            <li>Spinach</li>
            <li>Portobello</li>
            <li>Kalamata Olive</li>
            <li>Fresh Basil</li>
            <li>Artichoke</li>
            <li>Roasted Red Pepper</li>
            <li>Broccoli</li>

            <li className="hippy header">Veggie Subsitute</li>
            <li>Sausage*</li>
            <li>Pepperoni*</li>
            <li>Vegan Mozzarella</li>

            <li className="header">Cheese</li>
            <li>Extra Cheese</li>
            <li>Cheddar</li>
            <li>Feta*</li>
            <li>Ricotta*</li>

            <li className="header">Meat</li>
            <li>Peperoni</li>
            <li>Capicola*</li>
            <li>Bacon</li>
            <li>Hot Sausage</li>
            <li>Meatball</li>
            <li>Anchovy</li>
            <li>Steak*</li>
            <li>Chicken*</li>
            <li>Soppresata*</li>
          </ul>
          <p className="hippy note">Vegan Option Available</p>
        </section>

        <section id="specialty" className="specialty specialty-pizza">
          <img src="static/img/specialty-full.png" alt="specialty pizza" />

          <h2>Pizza Margherita</h2>
          <p>sm – <sup>$</sup>10.99 <span>/</span> lg – <sup>$</sup>13.49 <span>/</span> xl – <sup>$</sup>15.99</p>
          <h3>Fresh Mozzarella, Fresh Basil, Extra Virgin Olive Oil, Plum Tomato Sauce</h3>

          <h2>White Pizza</h2>
          <p>sm – <sup>$</sup>10.99 <span>/</span> lg – <sup>$</sup>13.49 <span>/</span> xl – <sup>$</sup>15.99</p>
          <h3>Roasted Tomato, Ricotta, Olive Oil with Herbs and Garlic</h3>

          <h2 className="hippy">Buffalo Chicken or Seitan</h2>
          <p>sm – <sup>$</sup>12.99 <span>/</span> lg – <sup>$</sup>15.49 <span>/</span> xl – <sup>$</sup>17.99</p>
          <h3>House Buffalo Sauce, Chicken, Onions, Celery, with Ranch on the side</h3>

          <h2 className="hippy">BBQ Chicken or Seitan</h2>
          <p>sm – <sup>$</sup>12.99 <span>/</span> lg – <sup>$</sup>15.49 <span>/</span> xl – <sup>$</sup>17.99</p>
          <h3>House BBQ Sauce, Grilled Chicken, Onions, Cheddar, Fresh Cilantro</h3>

          <h2>Dealer's Choice</h2>
          <p>(Market Price)</p>
          <h3>*Rotating Pie Dreamed Up By The Spak Crew</h3>

          <h5 className="note">*Ask For Current Pie</h5>
        </section>

        <section id="hoagies" className="hoagies">
          <img src="static/img/hoagies-full.png" alt="hoagies" />
          <h1>Meat</h1>

          <h2>Italian*</h2>
          <p>6" – <sup>$</sup>5.99<span>/</span> 12" – <sup>$</sup>10.49</p>
          <h3>Capicolla, Salami, Soppressata, Provolone, Lettuce, Tomato, Onion, Italian Dressing</h3>
          <h5 className="note">*Cured meats sourced from Parma Sausage Company in the Strip</h5>

          <h2>Steak & Cheese</h2>
          <p>6" – <sup>$</sup>5.99 <span>/</span> 12" – <sup>$</sup>10.49</p>
          <h3>Provolone, Lettuce, Tomato, Onion, Mayo</h3>

          <h2>Pittsburgh Steak</h2>
          <p>6" – <sup>$</sup>6.49 <span>/</span> 12" – <sup>$</sup>11.49</p>
          <h3>Provolone, Egg, Fries, Mushroom, Green Pepper, Onion, Banana Peppers, Lettuce, Tomato, Mayo</h3>

          <h2>Blue Steak</h2>
          <p>6" – <sup>$</sup>5.99 <span>/</span> 12" – <sup>$</sup>10.49</p>
          <h3>Provolone, Onion, Green Pepper, Mushroom, Mayo</h3>

          <h2>Tuna Melt</h2>
          <p>6" – <sup>$</sup>5.99 <span>/</span> 12" – <sup>$</sup>10.49</p>
          <h3>Tuna Salad with Apples, Cheddar, Lettuce, Tomato</h3>

          <h2>Meatball</h2>
          <p>6" – <sup>$</sup>5.99 <span>/</span> 12" – <sup>$</sup>10.49</p>
          <h3>Pork and Beef Meatballs, Provolone, Marinara Sauce</h3>

          <h2>Chicken</h2>
          <p>6" – <sup>$</sup>5.99 <span>/</span> 12" – <sup>$</sup>10.49</p>
          <h3>Fried or Grilled Chicken, Provolone, Lettuce, Tomato, Onion, Italian Dressing</h3>

          <h2>Buffalo / BBQ Chicken</h2>
          <p>6" – <sup>$</sup>5.99 <span>/</span> 12" – <sup>$</sup>10.49</p>
          <h3>Fried or Grilled Chicken, Provolone, Lettuce, Tomato, Onion, Sauce</h3>

          <h2>Chicken Parmesan</h2>
          <p>6" – <sup>$</sup>5.99 <span>/</span> 12" – <sup>$</sup>10.49</p>
          <h3>Fried or Grilled Chicken, Marinara, Provolone</h3>

          <h1>Vegetarian & Vegan</h1>

          <h2 className="hippy">Portobello</h2>
          <p>6" – <sup>$</sup>5.99 <span>/</span> 12" – <sup>$</sup>10.49</p>
          <h3>Rosemary Marinated Portobello, Onion, Provolone, Lettuce, Tomato, Italian Dressing</h3>

          <h2 className="hippy">Seitan Melt</h2>
          <p>6" – <sup>$</sup>5.99 <span>/</span> 12" – <sup>$</sup>10.49</p>
          <h3>Buffalo or BBQ Sauce, Provolone, Lettuce, Tomato, Onion</h3>

          <h2 className="hippy">Seitan "Cheese Steak"</h2>
          <p>6" – <sup>$</sup>5.99 <span>/</span> 12" – <sup>$</sup>10.49</p>
          <h3>Provolone, Green Pepper, Mushroom, Lettuce, Tomato, Onion, Mayo</h3>

          <h2 className="hippy">Seitan Pittsburgh "Steak"</h2>
          <p>6" – <sup>$</sup>6.49 <span>/</span> 12" – <sup>$</sup>11.49</p>
          <h3>Provolone, Egg, Fries, Mushroom, Green Pepper, Onion, Banana Peppers, Lettuce, Tomato, Mayo</h3>

          <aside className="extras">
            <div>
              <h2>Double Meat</h2>
              <h3>6" - <sup>$</sup>2 <span>/</span> 12" - <sup>$</sup>4</h3>
            </div>

            <div>
              <h2>Extra Cheese</h2>
              <h3>6" - <sup>$</sup>1 <span>/</span> 12" - <sup>$</sup>2</h3>
            </div>

            <div>
              <h2>Vegan Cheese</h2>
              <h3>6" - <sup>$</sup>1 <span>/</span> 12" - <sup>$</sup>2</h3>
            </div>

            <div>
              <h2>Vegenaise</h2>
              <h3>6" - <sup>$</sup>.50 <span>/</span> 12" - <sup>$</sup>1</h3>
            </div>

          </aside>
          <h5 className="note">(Not Vegan Unless Specified)</h5>
        </section>

        <section id="wings" className="wings">
          <img src="static/img/wings-full.png" alt="wings & Sides" />

          <h2>Wings</h2>
          <p>10 – <sup>$</sup>6.99 <span>/</span> 20 – <sup>$</sup>12.99</p>
          <h3><span>sauces:</span> Buffalo, Hickory BBQ, Honey Mustard, Garlic Parmesan, or Season Salt</h3>
          <h5 className="note">Served with a Side of Ranch or Blue Cheese</h5>

          <h2 className="hippy">Seitan Wings</h2>
          <p><sup>$</sup>6.49</p>
          <h3>Choose Any of Our Sauces Served With a Side Of Ranch or Blue Cheese.</h3>
          <h5 className="note">Our BBQ Sauce and Honey Mustard are Vegan. Vegan Buffalo Sauce and Vegan Ranch Dressing are Available Upon Request</h5>

          <h2 className="hippy">Breadsticks</h2>
          <p><sup>$</sup>5.99</p>
          <h3>Served with a side of marinara sauce</h3>

          <h2 className="hippy">Cheese Breadsticks</h2>
          <p><sup>$</sup>7.49</p>
          <h3>Served with a side of marinara sauce</h3>

          <h2 className="hippy">French Fries</h2>
          <p><sup>$</sup>2.99</p>
          <h3>Regular or Curly</h3>

          <h2 className="hippy">Cheese Fries</h2>
          <p><sup>$</sup>4.49</p>
          <h3>Regular or Curly, Covered in your choice of cheddar sauce or melted provolone</h3>

          <h2>Chicken Tenders</h2>
          <p>3 – <sup>$</sup>4.99 <span>/</span> 6 – <sup>$</sup>7.99</p>
          <h3>Served with Your Choice of Ranch, BBQ, Buffalo, Honey Mustard, or Ketchup</h3>

          <h2>Chicken Tenders & French Fries Combo</h2>
          <p>SM – <sup>$</sup>6.49 <span>/</span> LG – <sup>$</sup>9.49</p>
          <h3>Three or Six Chicken Tenders and French Fries Served with Your Choice of Ranch, BBQ, Buffalo, Honey Mustard, or Ketchup</h3>
        </section>

        <section id="salads" className="salads">
          <img src="static/img/salads-full.png" alt="salads" />

          <h2 className="hippy">Garden</h2>
          <p>SM – <sup>$</sup>4.99 <span>/</span> LG – <sup>$</sup>8.99</p>
          <h3>Baby Field Greens, Tomato, Onion, Cucumber, Banana Pepper, Green Pepper</h3>
          <h5 className="note">Add Chicken, Steak, or Seitan for <sup>$</sup>2</h5>

          <h2 className="hippy">Mediterranean</h2>
          <p>SM – <sup>$</sup>5.99 <span>/</span> LG – <sup>$</sup>9.99</p>
          <h3>Baby Field Greens, Kalamata Olive, Feta, Cucumber, Tomato, Banana Pepper</h3>
          <h5 className="note">Add Chicken, Steak, or Seitan for <sup>$</sup>2</h5>

          <h2>Chicken</h2>
          <p>LG – <sup>$</sup>11.99</p>
          <h3>Fried or Grilled Chicken, Fries, Cheese, Lettuce, Tomato, Cucumber, Onion</h3>

          <h2>Steak</h2>
          <p>LG – <sup>$</sup>11.99</p>
          <h3>Steak, Fries, Cheese, Lettuce, Tomato, Cucumber, Onion</h3>

          <h2 className="hippy">Seitan</h2>
          <p>LG – <sup>$</sup>11.99</p>
          <h3>Seitan, Fries, Cheese, Lettuce, Tomato, Cucumber, Onion</h3>

          <h2 className="hippy">Dressings</h2>
          <h3>House Ranch, House Italian, Bleu Cheese, Rosemary Balsamic, Carrot Ginger, Vegan Ranch (<sup>$</sup>1)</h3>
        </section>

        <section id="calzones" className="calzones">
          <img src="static/img/calzones-full.png" alt="calzones" />
          <h4 className="shout">Filled with ricotta and mozzarella, and served with a side of marinara sauce</h4>

          <h2>Build your own</h2>
          <p><sup>$</sup>11.99</p>
          <h3>Pick Any Two <a href="#toppings">Toppings</a></h3>
          <h5 className="note">Additional <a href="#toppings">Toppings</a> – <sup>$</sup>1.69</h5>

          <h2>italian</h2>
          <p><sup>$</sup>11.99</p>
          <h3>Salami, Capicolla, and Soppressata from Parma Sausage</h3>

          <h2>Meatball</h2>
          <p><sup>$</sup>11.99</p>
          <h3>Pork and Beef Meatballs, Cheesee</h3>

          <h2 className="hippy">Veggie Lover</h2>
          <p><sup>$</sup>11.99</p>
          <h3>Pick Any Three <a href="#toppings">Toppings</a> from the <a href="#toppings">Veggie List</a>.</h3>
          <h5 className="note">Additional <a href="#toppings">Toppings</a> – <sup>$</sup>1.69</h5>
        </section>


        <section className="ender">
          <h2>We Are What We Eat</h2>
          <p>Spak Brothers is committed to offering food that is local, sustainable, and healthy whenever possible. Our vegan cheese contains no casien. We use only unbleached, umbromated flour, and there are no refined sugars in our sauce or dough.</p>
          <div className="links">
            <a href="https://www.instagram.com/spakbrothers">Instagram</a>
            <a href="https://twitter.com/SpakBrothers">Twitter</a>
            <a href="https://www.facebook.com/Spak-Brothers-Pizza-115480515141914/?fref=ts">Facebook</a>
          </div>
          <img src="static/img/footer-full.png" alt="spak brothers pizza" />
          <h5 className="note"></h5>
        </section>

        <footer>
          <p>All Prices & Items Subject To Change <span>|</span> © Spak Brothers. All rights reserved. <span>|</span> Pittsburgh, Pa <span>|</span> 2019</p>
        </footer>
      </main>
    </div>
  )
}

export default Home
