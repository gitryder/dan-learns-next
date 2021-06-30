import { useRouter } from 'next/router';
import styles from '../../styles/Drinks.module.css';

export default function Drinks() {
    const router = useRouter();
    const { id } = router.query;

    return (
        getDrinkDetailsFromDrinkId(id)
    );
}

const getDrinkDetailsFromDrinkId = (drinkId) => {
    switch (drinkId) {
        case "1":
            return (
                <div>
                    <h2>Piña colada</h2>
                    <p>
                        The piña colada is a cocktail made with rum, cream of coconut or coconut milk, and pineapple juice, usually served either blended or shaken with ice
                    </p>
                </div>
            );
        case "2":
            return (
                <div>
                    <h2>Dirty Martini</h2>
                    <p>
                        The classical ingredients of a dirty martini include gin, vermouth, olive juice, and olives to garnish. In the 1970s, vodka has risen in popularity, and had replaced gin entirely in the dirty martini recipe.
                    </p>
                </div>
            );
        case "3":
            return (
                <div>
                    <h2>Bacardi Bahama Mama</h2>
                    <p>
                        Premixed cocktail that combines a blend of Bacardi rums with exotic tropical fruit flavors (peach, orange, coconut, pineapple, tropical punch and grapefruit). Just pour over ice or add ice and blend.
                    </p>
                </div>
            );
        case "4":
            return (
                <div>
                    <h2>Chi-Chi's Margarita</h2>
                    <p>
                        Pre-mixed cocktail that combines tequila, triple sec (orange flavors), and lime juice for a traditional margarita.
                    </p>
                </div>
            );
        case "5":
            return (
                <div>
                    <h2>Ice Box Mudslide</h2>
                    <p>
                        Pre-mixed cocktail made with real cream and neutral spirits. Flavors of coffee brandy and Irish Cream liqueur. No blender needed, can be served on the rocks or chilled.
                    </p>
                </div>
            );
        default:
            return (
                <div>
                    <h1>Sorry, that drink doesn't exist (yet).</h1>
                    <p>
                        Take a look at our full catalog&nbsp;
                        <a href="/drinks/">
                            here
                        </a>
                    </p>
                </div>
            );
    }
}