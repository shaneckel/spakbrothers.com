import React from 'react'
import Head from 'next/head'
import { RichText, Date } from 'prismic-reactjs'
import { format } from 'date-fns'
import Prismic from 'prismic-javascript'

const client = Prismic.client('https://spakbrothers.cdn.prismic.io/api/v2')

const Home = (props) => {
  const mainData = props.prismicRequest.results[0];

  if (process.browser) {
    document.querySelectorAll(".menu")[0].addEventListener("click", function(e) {
      e.preventDefault(),
      e.target.text =
        document.querySelectorAll("nav")[0].classList.contains("flip")
          ? "menu"
          : "close menu",
        document.querySelectorAll("nav")[0].classList.toggle("flip")
    })
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
         <a href="#location" className="llocation">location</a>
         <a href="#hours" className="lhours">hours</a>
         <a href="https://www.toasttab.com/spak-brothers/v3" style={{ background: "white", color: "black" }}>ORDER HERE</a> 
         <a href="" className="menu">menu</a>
      </nav>

      <main>
        <header style={{
          paddingTop:"3em"
        }}>
          <img src="static/img/header-new-full.jpg" alt="Spak Brothers Pizza" />
        </header>

        <section className="head" style={{
          fontStyle:"normal", 
          color: "white",
          marginTop: "1.8em",
          paddingTop: 0,
          borderTop: 0
        }}>
          <h2 style={{ textAlign: "center", fontWeight: "300"}}>Ordering Spak is now done <strong style={{fontWeight: "900"}}>only</strong> online.</h2>
          <p style={{ textAlign: "center", paddingTop: "1.6em", margin: "1em auto 0 auto"}}>
            <a className="button" style={{fontWeight:"900", textDecoration: "none", color: "#231f20", fontSize:"1.6em"}} href="https://www.toasttab.com/spak-brothers/v3">ORDER HERE</a> 
          </p>
        </section>
        
        <section className="news" style={{
          fontStyle:"normal", 
          color: "white"
        }}>
          <h2 style={{ textAlign: "left" }}>Can I call you?</h2>
          <p>Currently <strong style={{fontWeight: "900"}}>no</strong>. We don't use our phone. We have a service email <a href="mailto:spakhelp@gmail.com">spakhelp@gmail.com</a> that you can email with questions.</p>
          <h2 style={{ textAlign: "left", paddingTop: "1.6em" }}>What service do you use for ordering?</h2>
          <p>We use <a href="https://www.toasttab.com/spak-brothers/v3">Toast</a>, which will show you what menu items we have available. There's also an App for <a href="https://play.google.com/store/apps/details?id=com.toasttab.consumer&hl=en_US&gl=US">Google</a> and <a href="https://apps.apple.com/us/app/toast-takeout-delivery/id1362180579">Apple</a>.</p>
          <h2 style={{ textAlign: "left", paddingTop: "1.6em" }}>I didn't recieve a text message.</h2>
          <p>Sometimes Toast doesn't work perfectly and you don't recieve a message. If you never recieved a text simply email <a href="mailto:spakhelp@gmail.com">spakhelp@gmail.com</a> for more help.</p>
          <h2 style={{ textAlign: "left", paddingTop: "1.6em" }}>I didn't recieve my estimated order time.</h2>
          <p>Toast provides you with an estimated time and an order number. If you never recieved one, just email <a href="mailto:spakhelp@gmail.com">spakhelp@gmail.com</a> for assistance.</p>
        </section>
        
        <section className="news" style={{
          fontStyle:"normal", 
          color: "white"
        }}>
          <h2 style={{ textAlign: "left" }}>Updates</h2>
          <h3 style={{ textAlign: "left", fontSize: "0.6em", paddingBottom: ".3em", paddingTop:".2em"}}>{ format(new Date(mainData.last_publication_date), 'MMMM do, yyyy')}</h3>
          <div style={{ color: "white", textAlign:"left"}}>
            {RichText.render(mainData.data.body)}
          </div>
        </section>
        
        <section id="hours" className="hours">
          <h2 style={{ textAlign: "left" }}>Hours</h2>
          <div style={{ textAlign: "left"}}>
            <h4>TUESDAY - SUNDAY</h4>
            <h5>3pm - 9pm</h5>
          </div>    
          <div style={{ textAlign: "left" }}>
            <h4>MONDAY</h4>
            <h5>Closed</h5>
          </div>
        </section>
        
        <section id="location" className="location">
          <img src="static/img/hoagie-divider.png" alt="divider" />
          <h2><a href="http://maps.google.com/maps?f=q&amp;amp;hl=en&amp;amp;geocode=&amp;amp;q=5107+Penn+Avenue,+Pittsburgh+Pa&amp;amp;sll=40.473018,-79.953524&amp;amp;sspn=0.041722,0.111494&amp;amp;ie=UTF8&amp;amp;ll=40.465552,-79.942542&amp;amp;spn=0.005477,0.013937&amp;amp;z=17" target="_new">5107 Penn Avenue</a></h2>
          <h3>Pittsburgh, Pa</h3>
        </section>

        <section className="ender">
          <h2>We Are What We Eat</h2>
          <p>Spak Brothers is committed to offering food that is local, sustainable, and healthy whenever possible. Our vegan cheese contains no casien. We use only unbleached, umbromated flour, and there are no refined sugars in our sauce or dough.</p>
          <div className="links">
            <a href="https://www.instagram.com/spakbrothers">Instagram</a>
            <a href="https://twitter.com/SpakBrothers">Twitter</a>
            <a href="https://www.facebook.com/Spak-Brothers-Pizza-115480515141914/?fref=ts">Facebook</a>
          </div>
        </section>

        <footer>
          <p>All Prices & Items Subject To Change <span>|</span> © Spak Brothers. All rights reserved. <span>|</span> Pittsburgh, Pa <span>|</span> 2021</p>
        </footer>
      </main>
    </div>
  )
}

Home.getInitialProps = async (context ) => {
  const prismicRequest = await client.query(
    Prismic.Predicates.at('document.type', 'news')
  )
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { prismicRequest }
}

export default Home
