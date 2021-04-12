import React from 'react';
import LogoSqColor from './Images/LogoSqColor.png';
import Cake from './Images/Cake.png';
import Candy from './Images/Candy.png';
import Capsules from './Images/Capsules.png';
import Coconut from './Images/coconut.png';
import Grapes from './Images/grapes.png';
import Gummies from './Images/Gummies.png';
import Lavender from './Images/lavender.png';
import Olives from './Images/olives.png';
// import PLBars from './Images/PurpleLemonBars.png';
import Powder from './Images/Powder.png';
import ButterPic from './Images/butter.png';
import Chocolate from './Images/chocolate.png';
import Vegetables from './Images/vegetable.png';
// import Butter from './pages/Butter';
// import info from './info.json';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

import { BrowserRouter as Router } from 'react-router-dom';

import ThisMain from './components/main';
// import styling from './index.css';

const App = (  ) => {
  return (
    <Router style={s.bg}>
      <div style={s.head}>
        <img src={LogoSqColor} height={200} className='App-logo' alt='logo' />
      </div>
      <ThisMain />
      <section style={s.faq}>
        <h1 style={s.centerText}>
          Welcome to our 1 stop shop of medicinal delectables!
        </h1>
        <p>
          Our website is currently a work in progress. Please bare with us as we
          try to make the site better for you. While the website may be a work
          in progress, the products are all available!
        </p>
        <h2 style={s.centerText}>Current Site Layout:</h2>
        <ol>
          <li>Products</li>
          <li>FAQ</li>
          <li>Links & Resources</li>
        </ol>
      </section>
      <h1 style={s.centerText}>Products</h1>
      <body style={s.shop}>
        <Card style={s.card}>
          <CardImg top width='100%' src={Chocolate} alt='Chocolates' />
          <CardBody>
            <CardTitle tag='h5'>Chocolates</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Medicated chocolate! Can come in liquid, syrup or solid
              chocolates. May include seasonal themes and flavors, as well as
              use candy molds for fun shapes!
            </CardText>
            {/* <Button color='info'>
              <Link to='/butter'>More Info</Link>
            </Button> */}
          </CardBody>
        </Card>
        <Card style={s.card}>
          <CardImg top width='100%' src={Gummies} alt='Gummies' />
          <CardBody>
            <CardTitle tag='h5'>Gummies</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Medicated gummies! Uses jello for a base and comes in standard
              jello flavors (strawberry, lime, orange, lemon, berry) and various
              shapes (rings, animals, bottlecaps, etc)
            </CardText>
            {/* <Button color='info'>Button</Button> */}
          </CardBody>
        </Card>
        <Card style={s.card}>
          <CardImg top width='100%' src={Candy} alt='Gummies' />
          <CardBody>
            <CardTitle tag='h5'>Candy</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Medicated candy! Comes in either lollipop or individual candy
              form. Flavoring is currently: strawberry or lime, more coming
              soon!
            </CardText>
            {/* <Button color='info'>Button</Button> */}
          </CardBody>
        </Card>
        <Card style={s.card}>
          <CardImg top width='100%' src={Cake} alt='Gummies' />
          <CardBody>
            <CardTitle tag='h5'>Baked Goods</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Goods may vary, cookies/brownies will be regularly available with
              seasonal goods for holidays. Quantity ranges from individual
              servings to requesting an entire cake. More details in the future!
            </CardText>
            {/* <Button color='info'>Button</Button> */}
          </CardBody>
        </Card>
        <Card style={s.card}>
          <CardImg top width='100%' src={Powder} alt='Gummies' />
          <CardBody>
            <CardTitle tag='h5'>Canna-Powder</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Dehydrated Canna-Oil! Use it in place of oil, or on any heated
              dish to encorporate cannabis. Acts like a sugar so it dissolves in
              liquid, and your body absorbs it faster!
            </CardText>
            {/* <Button color='info'>Button</Button> */}
          </CardBody>
        </Card>
        <Card style={s.card}>
          <CardImg top width='100%' src={Capsules} alt='Gummies' />
          <CardBody>
            <CardTitle tag='h5'></CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Vegetable-based consumable capsules that have been filled with
              cannapowder. Microdose on the go without the mess of exposed
              powder! Tablets are water soluble so avoid moisture!!
            </CardText>
            {/* <Button color='info'>Button</Button> */}
          </CardBody>
        </Card>{' '}
        <Card style={s.card}>
          <CardImg top width='100%' src={ButterPic} alt='Gummies' />
          <CardBody>
            <CardTitle tag='h5'>Butter</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Cannabis infused salted butter (In stick form).
              <p>Recipe Suggestions:</p>
              <ul>
                <li>French Toast</li>
                <li>Grilled Cheese</li>
                <li>Mac & Cheese</li>
              </ul>
            </CardText>
            {/* <Button color='info'>Button</Button> */}
          </CardBody>
        </Card>
        <Card style={s.card}>
          <CardImg top width='100%' src={Vegetables} alt='Gummies' />
          <CardBody>
            <CardTitle tag='h5'>Vegetable Oil</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Cannabis infused oil, using a vegetable oil base.
              <p>Recipe Suggestions:</p>
              <ul>
                <li>Cupcakes</li>
                <li>Bread</li>
                <li>Brownies</li>
              </ul>
            </CardText>
            {/* <Button color='info'>Button</Button> */}
          </CardBody>
        </Card>
        <Card style={s.card}>
          <CardImg top width='100%' src={Olives} alt='Gummies' />
          <CardBody>
            <CardTitle tag='h5'>Olive Oil</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Cannabis infused oil, using an olive oil base. Classic extra
              virgin olive oil, provided by your local grocer.
              <p>Recipe Suggestions:</p>
              <ul>
                <li>Bake with it!</li>
                <li>Cook with it!</li>
                <li>DIY salad dressing</li>
              </ul>
            </CardText>
            {/* <Button color='info'>Button</Button> */}
          </CardBody>
        </Card>
        <Card style={s.card}>
          <CardImg top width='100%' src={Coconut} alt='Gummies' />
          <CardBody>
            <CardTitle tag='h5'>Coconut Oil</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Cannabis infused oil, using a coconut oil base. Cannabis bonds
              best with coconut oil due to the high fat content, we use vegan,
              unfiltered coconut oil, so it has that coconuty taste!
              <p>Recipe Suggestions:</p>
              <ul>
                <li>Bake with it!</li>
                <li>Cook with it!</li>
                <li>Even use it as a lotion (or lube, we won't tell.)</li>
              </ul>
            </CardText>
            {/* <Button color='info'>Button</Button> */}
          </CardBody>
        </Card>
        <Card style={s.card}>
          <CardImg top width='100%' src={Grapes} alt='Gummies' />
          <CardBody>
            <CardTitle tag='h5'>Grapeseed Oil</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Cannabis infused oil, using a grape oil base. More commonly used
              for oriental dishes.
              <p>Recipe Suggestions:</p>
              <ul>
                <li>High heat/sauté/stir-fry</li>
                <li>Roasting</li>
                <li>Grilling</li>
              </ul>
            </CardText>
            {/* <Button color='info'>Button</Button> */}
          </CardBody>
        </Card>
        <Card style={s.card}>
          <CardImg top width='100%' src={Lavender} alt='Gummies' />
          <CardBody>
            <CardTitle tag='h5'>Canola Oil</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              Details:
            </CardSubtitle>
            <CardText>
              {' '}
              Cannabis infused oil, using a canola oil base.
              <p>Recipe Suggestions:</p>
              <ul>
                <li>Marinade</li>
                <li>Fried food</li>
                <li>Mayonnaise / Aioli</li>
              </ul>
            </CardText>
            {/* <Button color='info'>Button</Button> */}
          </CardBody>
        </Card>
      </body>
      <section style={s.faq}>
        <h1 style={s.centerText}>FAQ</h1>
        <ul>
          <li>
            <h2>Will I taste the cannabis?</h2>
            <p>
              Our infusion process utilizes kitchen hardware designed for
              cannabis infusion, and our final product is strained through
              multiple layers of filters, leaving only trace amounts of any
              plant material and minimizing the cannabis taste to the point
              where it's only a hint. With enough flavor/seasoning in your food
              you may not taste the cannabis at all, but it's normal for there
              to be some flowery-flavor to present itself when encorporating
              medicine into your infusions.
            </p>
          </li>
          <li>
            <h2>How do I use cannabutter?</h2>
            <p>
              The same way you use butter in your kitchen traditionally works
              just fine for cannabutter. You can spread it on toast, use it to
              grease your cooking tools, or mix it into your ingredients.
              Cannabutter is a very diverse resource that can provide medication
              through a variety of meals!
            </p>
          </li>
          <li>
            <h2>How do I use the oils?</h2>
            <p>
              The cooking oils work just like your standard cooking oils, and
              may be applied to a pan or incorporated into food that calls for
              oil. Because they are already activated, the oil does not require
              heat to provide it's benefits, and can technically be consumed as
              is, if so desired. However, we recommend cooking with it! Much
              tastier!
            </p>
          </li>
          <li>
            <h2>Cannapowder? What's that?</h2>
            <p>
              By combining the already infused oils listed here with specific
              (commercially available) powder, the oil can be dehydrated,
              allowing it to be applied like a dry spice
              (sugar/salt/pepper/etc).
            </p>
            <p>
              While you can consume this as-is like the oils, the chalky texture
              isn't exactly desirable, so either completely blending the
              material to encorporate into your food, or applying heat to melt
              it will allow it to soak into the food, for tastier consumption.
            </p>
          </li>
        </ul>
        {/*
            <p>How do I order?</p>
            <ol>
              <li>
                <p>
                  Find the products you want to order, contact your provider
                  with the order details, and they will contact Deadibles
                  directly to place and receive your order. Then it’s just a
                  matter of meeting your provider!
                </p>
              </li>
              <li>
                <p>
                  After finding the products you want, add them to your ‘cart’
                  until satisfied. When done, hit the ‘place order’ button in
                  your view cart screen, and our database will update with the
                  order information. You will be prompted to reach out to your
                  provider with the order # displayed on the order screen, so
                  that Deadibles can provide the correct order to the right
                  provider.
                </p>
              </li>
            </ol>
            <p>
              Deadibles will first reach out to you via your provider to deliver
              the cost breakdown and total. If the customer agrees, Deadibles
              will carry out the order and deliver through the provider, with
              wait time depending on order size/complexity, and quantity of
              orders placed before it.
            </p>
          </li>
          <li>
            <p>
              Where are the prices?: prices are set by your provider. The
              website is intended as a “menu” of options, but you’ll need to ask
              your provider(s) if they have stock or can acquire the goods on
              your behalf. Because of this series of interactions, prices are
              set by the provider, so they can charge the necessary prices to
              turn a worthwhile profit, without gouging you, the customer.
            </p>
          </li>
          <li>
            <p>
              Can I purchase directly from Deadibles?: Unfortunately no, we only
              sell to providers to minimize sale interaction. Deadibles is
              intended as a bulk product service, so unless you are buying
              multiple oz/orders of something, you’ll likely need to interact
              with your primary provider.
            </p>
          </li>
          <li>
            <p>
              Will any information ever tie back to me?: No. The developers
              behind Deadibles are career web developers, data privacy rights
              enthusiasts and most of all, medicated chefs. We want to be able
              to provide people with a service without the fear of
              repercussions. In designing our webpage, we have taken as many
              precautions as we can to avoid collecting your personal data, in
              case the website/database are ever compromised. For starters, user
              accounts are all pre-generated by an admin, to avoid any personal
              details in login information. We also avoid collecting your
              cookies (login/website history), utilize a password-protected
              landing page, and our database will be cached (scrambled, saved,
              and deleted from the actual database) regularly to avoid one big
              long list of orders. Within the database, customers are only
              referred to as an ID code, and providers are listed under
              code-names, so to an outside source it will be practically
              impossible for someone to mine personal information from our data.
            </p>
          </li>
          <li>
            <p>
              Why pre-made passwords? : To avoid using peoples personal
              information for accounts and in the spirit of going undetected as
              a webpage/service, accounts are pre-generated with randomized
              passwords. Because our website is password-protected, not just
              anyone can access our store page. The website will automatically
              log users out after 30 minutes of inactivity, and we intentionally
              do not save cookies (your password), so that if a customer’s
              device were to be confiscated, the hope would be that law
              enforcement wouldn’t know what their random password goes to (let
              alone if it is a password, given the randomness), and that their
              device would be logged out of our store, in case they happened to
              be browsing around any point in time.
            </p>
          </li>
          <li>
            <p>
              Why do I keep getting logged out?
              </p>
            <ol>
              <li>
                <p>
                didn’t move your screen for too long and our ‘inactive-user
                removal system’ forced you out of the page
                </p>
              </li>
              <li>
                <p>
                  you closed the
              browser/tab and came back. Deadibles does NOT save cookies, so
              your login information is NOT saved. This is an intentional
              security design.
                </p>
              </li>
              </ol>
          </li>
        </ul> */}
      </section>
      <section style={s.faq}>
        <h1 style={s.centerText}>Resources for the Kitchen!</h1>

        <h2>Online Resources</h2>

        <h4>Articles</h4>
        <ul>
          <li>
            Guide to Cannabutter{' '}
            <a
              href='https://www.medicalmarijuanainc.com/complete-guide-cannabutter-make/'
              title='complete guide'
            >
              www.medicalmarijuanainc.com/
            </a>
          </li>
          <li>
            The Beginner's Guide to Edibles{' '}
            <a
              href='https://lifehacker.com/the-beginners-guide-to-edibles-1821047006'
              title='beginners guide to edibles'
            >
              www.lifehacker.com/
            </a>
          </li>
          <li>
            [Edibles] Products & How to Consume{' '}
            <a
              href='https://weedmaps.com/learn/products-and-how-to-consume/edibles'
              title=''
            >
              www.weedmaps.com/
            </a>
          </li>
          <ul>
            {' '}
            <h4>Cannapowder</h4>
            <li>
              Relatively Simple Modernist Marijuana Cooking: Powdered
              Cannabutter{' '}
              <a
                href='https://thefreshtoast.com/recipes/relatively-simple-modernist-marijuana-cooking-powdered-cannabutter/'
                title='simple modern marijuana cooking'
              >
                thefreshtoast.com/
              </a>
            </li>
            <li>
              cannabis oil powder has 15 minute effect time{' '}
              <a
                href='https://www.rxleaf.com/cannabis-oil-powder-for-edibles-that-kick-at-15-minutes/'
                title=''
              >
                www.rxleaf.com/
              </a>
            </li>
            <li>
              3x faster edibles using cannabis oil powder{' '}
              <a
                href='https://www.cannadish.net/edibles-high-will-kick-in-3-times-as-fast-using-cannabis-oil-powder/'
                title=''
              >
                www.cannadish.net/
              </a>
            </li>
          </ul>
        </ul>

        <h4>Websites</h4>
        <ul>
          <li>
            recipes, guides, products & more{' '}
            <a
              href='https://www.originalweedrecipes.com/'
              title='recipes, guides, products & more'
            >
              www.originalweedrecipes.com/
            </a>
          </li>
          <li>
            Cheri Sicard, Featured on High Times, Fox, Time & more{' '}
            <a href='https://cannabischeri.com/' title='cannabis cheri'>
              www.cannabischeri.com/
            </a>
          </li>
          <li>
            Wake & Bake (includes vegan recipes){' '}
            <a href='https://wakeandbake.co/' title='wake and bake'>
              www.wakeandbake.co/
            </a>
          </li>
          <li>
            Eat your cannabis!{' '}
            <a href='https://eatyourcannabis.com/' title='eat your cannabis'>
              www.eatyourcannabis.com/
            </a>
          </li>
        </ul>

        <h2>Books (for purchase)</h2>
        <ul>
          <li>
            Cooking With Cannabis, by Laurie Wolf | $10 Hardcover | $10 Kindle |
            $14.30 Paperback{' '}
            <a
              href='https://www.amazon.com/dp/1631591169?tag=dtthemanual-20&th=1&psc=1&ascsubtag=1616431153379rr6s&geniuslink=true'
              title='Cooking With Cannabis'
            >
              www.amazon.com/.../cookingwithcannabis/
            </a>
          </li>
          <li>
            Bong Apétit, by MUNCHIES | $16 Kindle | $27 Hardcover{' '}
            <a
              href='https://www.amazon.com/dp/0399580107?tag=dtthemanual-20&th=1&psc=1&ascsubtag=1616431153379yz24&geniuslink=true'
              title='Bong Apetit'
            >
              www.amazon.com/.../bongapetit
            </a>
          </li>
          <li>
            Cannabis Cocktails, Mocktails & More, by Warren Bobrow | $12 Kindle
            | $14.20 Hardcover{' '}
            <a
              href='https://www.amazon.com/dp/1592337341?tag=dtthemanual-20&th=1&psc=1&ascsubtag=161643115338072a5&geniuslink=true'
              title='Cannabis Cocktails & More'
            >
              www.amazon.com/.../cannabiscocktailsandmore
            </a>
          </li>
          <li>
            The Vegan Cannabis Cookbook, by Eva Hammond | $2 Kindle | $9
            Paperback{' '}
            <a
              href='https://www.amazon.com/Vegan-Cannabis-Cookbook-Delicious-Marijuana-Infused/dp/9492788101/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr='
              title='Vegan Cannabis Cookbook'
            >
              www.amazon.com/.../thevegancannabiscookbook
            </a>
          </li>
          <li>
            Sweet Mary Jane, by Karin Lazarus | $22 Kindle | $28 Hardcover{' '}
            <a
              href='https://www.amazon.com/dp/158333565X?tag=dtthemanual-20&th=1&psc=1&ascsubtag=1616431153380ovis&geniuslink=true'
              title='Sweet Mary Jane'
            >
              www.amazon.com/.../sweetmaryjane
            </a>
          </li>
        </ul>
      </section>

      <footer style={s.foot}>
        <h1>Footer Section! You've hit rock bottom!</h1>
        <h2>Image rights:</h2>
        <div>
          Icons made by{' '}
          <a href='https://www.freepik.com' title='Freepik'>
            Freepik
          </a>{' '}
          ,{' '}
          <a href='https://www.flaticon.com/authors/monkik' title='monkik'>
            monkik
          </a>{' '}
          , and{' '}
          <a href='https://www.flaticon.com/authors/eucalyp' title='Eucalyp'>
            Eucalyp
          </a>{' '}
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
        <h1>Bottom Navigation Coming Soon!</h1>
      </footer>
    </Router>
  );
};

export default App;
const s = {
  head: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#375a2a',
  },
  bg: {
    backgroundColor: '#375a2a',
  },
  centerText: {
    display: 'flex',
    justifyContent: 'center',
  },
  shop: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '5px auto',
    padding: '5px',
    width: '90%',
    border: '5px dashed black',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '10px 0px',
  },
  card: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: '20%',
    margin: '10px 20px',
    padding: '3px',
    border: '2px solid black',
  },
  foot: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    backgroundColor: '#375a2a',
  },
  faq: {
    width: '75%',
    border: 'solid black 5px',
    margin: '50px auto',
  },
};
