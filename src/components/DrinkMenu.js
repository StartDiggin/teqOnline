import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class DrinkMenu extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Header />

          <div className="drinkMenu">
            <div className="drinkImg">
              <h1>Drink Menu</h1>
            </div>
            <div className="headings">
              <h1>Beverages</h1>
            </div>
            <div className="bev-left">
              <ul>
                <li>
                  <h2>Jarritos</h2>
                  <span>$</span>
                  <h3>Mandarin, strawberry, tamarind</h3>
                </li>
              </ul>
            </div>
            <div className="bev-right">
              <ul>
                <li>
                  <h2>horchata</h2>
                  <span>$</span>
                  <h3>
                    Cinnamon-vanilla rice drink, traditional refreshing drink
                    from Mexico
                  </h3>
                </li>
              </ul>
            </div>
            <div className="headings">
              <h1>Margaritas</h1>
            </div>
            <div className="margaritas-left">
              <ul>
                <li>
                  <h2>Jalapeno Margarita</h2>
                  <span>$9.00</span>
                  <h3>
                    Tanteo Jalapeno Tequila, fresh lime juice, Cointreau and
                    house made margarita mix
                  </h3>
                </li>
                <li>
                  <h2>Grand Raspberry</h2>
                  <span>$11.00</span>
                  <h3>
                    1800 Tequila Reposado, Grand Marnier, lime juice, orange
                    juice, agave nectar, house-made margarita mix and a float of
                    Chambord liquor
                  </h3>
                </li>
                <li>
                  <h2>Strawberrita</h2>
                  <span>$11.00</span>
                  <h3>
                    Cabo Wabo Blanco Tequila, strawberry puree, lime juice,
                    served on the rocks
                  </h3>
                </li>
                <li>
                  <h2>French Margarita</h2>
                  <span>$10.50</span>
                  <h3>
                    Tequila 1800, Grand Marnier, lime juice, orange juice,
                    margarita mix, Chambord and sugar rim
                  </h3>
                </li>
                <li>
                  <h2>La Rosita</h2>
                  <span>$11.00</span>
                  <h3>
                    Patron Silver, Cointreau, lime juice, pink lemonade and
                    diced lemons
                  </h3>
                </li>
                <li>
                  <h2>Flavor</h2>
                  <span>$9.00</span>
                  <h3>
                    Banana, kiwi, melon, blueberry, blackberry, peach, raspberry
                  </h3>
                </li>
                <li>
                  <h2>Tequila’s Ultimate (Premium)</h2>
                  <span>$10.50</span>
                  <h3>
                    Choice of tequila, lime juice, Cointreau and our house-made
                    margarita mix. Tequilas: 3 Generaciones, Cabo Wabo, Patron,
                    Don Julio, Milagro, Herradura, Gran Centenario
                  </h3>
                </li>
              </ul>
            </div>
            <div className="margaritas-right">
              <ul>
                <li>
                  <h2>Pomegranate</h2>
                  <span>$11.00</span>
                  <h3>
                    Patron Silver, lime juice, pomegranate syrup and a float of
                    Grand Marnier
                  </h3>
                </li>
                <li>
                  <h2>Mangorita</h2>
                  <span>$10.00</span>
                  <h3>
                    Sauza Hornitos Reposado, lime juice, house-made margarita
                    mix and mango puree, served on the rocks
                  </h3>
                </li>
                <li>
                  <h2>Coco-Rita</h2>
                  <span>$10.00</span>
                  <h3>
                    1800 Coconut Tequila, pineapple juice, lime juice and fresh
                    coconut rim
                  </h3>
                </li>
                <li>
                  <h2>Cucumber-Rita</h2>
                  <span>$10.50</span>
                  <h3>
                    Sauza Hornitos Reposado, lime juice, Cointreau, muddled
                    cucumber and chili powder rim
                  </h3>
                </li>
                <li>
                  <h2>Corona-Rita</h2>
                  <span>$10.00</span>
                  <h3>Gold or flavor margarita topped with a 7oz. bottle</h3>
                </li>
                <li>
                  <h2>La Original</h2>
                  <span>$8.00</span>
                  <h3>Jose Cuervo Gold margarita</h3>
                </li>
                <li>
                  <h2>Tequila’s Ultimate (Top Shelf)</h2>
                  <span>$9.50</span>
                  <h3>
                    Choice of tequila, lime juice, Cointreau and our house-made
                    margarita mix. Tequila’s: Sauza Hornitos, Conmemorativo,
                    Corazon, El Jimador, Avion, Cuervo 1800
                  </h3>
                </li>
              </ul>
            </div>
            <div className="headings">
              <h1>Martinis</h1>
            </div>
            <div className="martinis-left">
              <ul>
                <li>
                  <h2>Jalisco Express</h2>
                  <span>$14.00</span>
                  <h3>Don Julio, Vidal Mezcal, chocolate bitters</h3>
                </li>
                <li>
                  <h2>El Clasico</h2>
                  <span>$13.00</span>
                  <h3>Herradura Silver, vermouth, olive juice</h3>
                </li>
              </ul>
            </div>
            <div className="martinis-right">
              <ul>
                <li>
                  <h2>El Tuleno</h2>
                  <span>$14.00</span>
                  <h3>Herradura Anejo, sweet vermouth, orange bitters</h3>
                </li>
              </ul>
            </div>
            <div className="headings">
              <h1>Non-Alcoholic</h1>
            </div>
            <div className="non-left">
              <ul>
                <li>
                  <h2>Strawberry Lemonade</h2>
                  <span>$</span>
                </li>
                <li>
                  <h2>Virgin Pina Colada</h2>
                  <span>$</span>
                </li>
              </ul>
            </div>
            <div className="non-right">
              <ul>
                <li>
                  <h2>Lemonade</h2>
                  <span>$</span>
                </li>
                <li>
                  <h2>Flavor Virgin Margaritas</h2>
                  <span>$</span>
                </li>
              </ul>
            </div>
            <div className="headings">
              <h1>Tequila Cocktails</h1>
            </div>
            <div className="cocktails-left">
              <ul>
                <li>
                  <h2>Mexican Coffee</h2>
                  <span>$9.00</span>
                  <h3>
                    Cuervo 1800 Reposado, fresh coffee, Kahlua and whipped cream
                  </h3>
                </li>
                <li>
                  <h2>Panchito’s Mule</h2>
                  <span>$13.00</span>
                  <h3>
                    Patron Repasado, mango puree, strawberry, pineapple and
                    ginger beer
                  </h3>
                </li>
                <li>
                  <h2>La Fortuna</h2>
                  <span>$11.00</span>
                  <h3>
                    Cabo Wabo Reposado Tequila, lime juice, agave nectar,
                    pomegranate juice and cranberry juice
                  </h3>
                </li>
                <li>
                  <h2>Matador</h2>
                  <span>$9.50</span>
                  <h3>
                    Hornitos Reposado Tequila, pina colada mix, strawberry puree
                    and pineapple
                  </h3>
                </li>
                <li>
                  <h2>Coco-Mexican Mojito</h2>
                  <span>$9.50</span>
                  <h3>
                    1800 Coconut Tequila, mojito mix, fresh mint, pineapple
                    juice and soda water
                  </h3>
                </li>
              </ul>
            </div>
            <div className="cocktails-right">
              <ul>
                <li>
                  <h2>Manzarita</h2>
                  <span>$13.00</span>
                  <h3>
                    Don Julio Reposado, St Germain Liqueur, apple infused and
                    dash of cinnamon
                  </h3>
                </li>
                <li>
                  <h2>Sandia Fresca</h2>
                  <span>$12.50</span>
                  <h3>
                    Herradura Silver, watermelon syrup, lime juice, agave nectar
                    and mezcal
                  </h3>
                </li>
                <li>
                  <h2>Paloma</h2>
                  <span>$12.00</span>
                  <h3>Herradura Silver, grapefruit juice and lime juice</h3>
                </li>
                <li>
                  <h2>Bloody Maria</h2>
                  <span>$9.50</span>
                  <h3>1800 Reposado, Clamato Juice, lime juice and Tapatio</h3>
                </li>
                <li>
                  <h2>Mexican Mojito</h2>
                  <span>$9.50</span>
                  <h3>
                    Hornitos Reposado Tequila, mojito mix, fresh mint and soda
                    water
                  </h3>
                </li>
              </ul>
            </div>
            <div className="headings">
              <h1>Tequilas</h1>
            </div>
            <div className="teq-left">
              <ul>
                <li>
                  <h2>Mezcal</h2>
                  <span>$9.00 - $15.00</span>
                  <h4>
                    | Del Maguey Chichicapa - $15 | Del Maguey San Luis Del Rio
                    - $9
                  </h4>
                  <h4>
                    | El Buho - $9 | Del Maguey Vida - $9 | Don Mateo de la
                    Sierra - $12 |
                  </h4>
                  <h3>Tequila’s smoky counterpart</h3>
                </li>
                <li>
                  <h2>Extra Anejo</h2>
                  <span>$14.00 - $42.00</span>
                  <h4>
                    | Avion 44 Extra - $25 | Don Julio 1942 - $25 | Don Julio 70
                    - $14 | Don Julio Real - $42
                  </h4>
                  <h4>
                    | Herradura Suprema - $42 | Milagro Select - $18 | Patron
                    Gran Platinum - $20
                  </h4>
                  <h4>
                    | Reserva de la Familia - $25 | Rey Sol Extra - $32 | San
                    Matias - $15 |
                  </h4>
                  <h3>
                    These Tequilas are the very best creations from some of the
                    finest distilleries in Mexico
                  </h3>
                </li>
                <li>
                  <h2>Reposado</h2>
                  <span>$8.00 - $11.00</span>
                  <h4>
                    | 1800 Reposado - $9 | 7 Leguas Reposado - $10 | Avion
                    Reposado - $10.50
                  </h4>
                  <h4>
                    | Cabo Wabo Reposado - $10.50 | Casa Amigos Reposado - $10 |
                    Case Noble Reposado - $10.50
                  </h4>
                  <h4>
                    | Cazadores Reposado - $9 | Centenario Reposado - $9 |
                    Corralejo Reposado - $9
                  </h4>
                  <h4>
                    | Don Eduardo Reposado - $10.50 | Don Julio - $11 | El
                    Jimador Reposado - $8.50
                  </h4>
                  <h4>
                    | El Tesero Don Felipo Reposado - $11 | Espolon Reposado -
                    $8.50 | Herradura Reposado - $11{" "}
                  </h4>
                  <h4>
                    | Horintos Reposado - $9 | Hotel California Reposado - $8.50
                    | Karma Reposado - $11
                  </h4>
                  <h4>
                    | Maestro Dobel Reposado - $11 | Milagro Reposado - $9.50 |
                    Partida Reposado - $11
                  </h4>
                  <h4>
                    | Pueblo Viejo Reposado - $8 | Tres Greneraciones Reposado -
                    $9 | El Patron Reposado - $11 |
                  </h4>
                  <h3>
                    Aged for a period of two months to 1 year in oak barrels.
                    The aging process is designed to mellow the agave creating
                    smoother Tequila, great for sipping
                  </h3>
                </li>
              </ul>
            </div>
            <div className="teq-right">
              <ul>
                <li>
                  <h2>Flavor</h2>
                  <span>$8.00 - $9.00</span>
                  <h4>
                    | 1800 Coconut - $9 | Avion Cafe - $8 | Patron Cafe - $8
                    Tanteo Jalapeno - $8.50 |
                  </h4>
                </li>
                <li>
                  <h2>Anejo</h2>
                  <span>$9.00 - $12.00</span>
                  <h4>
                    | 1800 Anejo - $9.50 | El Jimador Anejo - $9 | 7 Leguas
                    Anejo - $11 | Avion Anejo - $11
                  </h4>
                  <h4>
                    | Cabo Wabo Anejo - $11 | Casa Amigos Anejo - $11 | Casa
                    Noble Anejo - $11
                  </h4>
                  <h4>
                    | Cazadores Anejo - $9.50 | Corralejo Anejo - $9.50 | Don
                    Eduardo Anejo - $11
                  </h4>
                  <h4>
                    | Don Julio Anejo - $12 | El Patron Anejo - $12 | El Tesero
                    Don Felipe Anejo - $12
                  </h4>
                  <h4>
                    | Espolon Anejo - $12 | Herradura Anejo - $12 | Karma Anejo
                    - $12
                  </h4>
                  <h4>
                    | Mastero Dobel Anejo - $12 | Milagro Anejo - $10 | Partida
                    Anejo - $12
                  </h4>
                  <h4>| Tres Generaciones Anejo - $9.50</h4>
                  <h3>
                    Aged for 1 to 3 years and exhibit the true characteristics
                    of their oak contact. Anejos are smooth, mellow and
                    comparable to fine whiskies, single malt scotches or cognacs
                  </h3>
                </li>
                <li>
                  <h2>Silver</h2>
                  <span>$8.00 - $10.00</span>
                  <h4>
                    | 1800 Silver - $8.50 | 7 Leguas - $9.50 | Avion - $9.50 |
                    Cabo Wabo - $9
                  </h4>
                  <h4>
                    | Casa Amigos - $9 | El Patron - $10 | El Tesoro Don Felipe
                    - $10 | Espolon - $8
                  </h4>
                  <h4>
                    | Herradura - $10 | Karma - $10 | Casa Noble - $9.50 |
                    Centenario - $8.50 | Corralejo - $8.50
                  </h4>
                  <h4>
                    | Don Eduardo - $9 | Don Julio - $9 | Maestro Dobel - $9.50
                    | Milagro - $9 | Partida - $10
                  </h4>
                  <h4>| Tres Generaciones - $8.50</h4>
                  <h3>
                    Unaged or aged no longer than 60 days and has the most
                    distinctive taste of pure agave. Typically floral and herbal
                    with clean minerality and peppery bite.
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default DrinkMenu;
