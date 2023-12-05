import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Beef Vhuna',
        description: 'Made with Deshi beef',
        price: 250.0,
    },
    {
        id: 'm2',
        name: 'Mutton Shahi Rejala',
        description: 'Made with Shahi Masalas',
        price: 280.50,
    },
    {
        id: 'm3',
        name: 'Vorta Package',
        description: '5 Different types of Vorta',
        price: 99.99,
    },
    {
        id: 'm4',
        name: 'Plain Rice',
        description: 'Frehly cooked rice to eat up with delicious red meats',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    // eslint-disable-next-line array-callback-return
    const mealsList = DUMMY_MEALS.map((meal) => 
        <MealItem 
            id={meal.id}
            key={meal.id} 
            name={meal.name} 
            description={meal.description} 
            price={meal.price} 
        />);
        
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
            
        </section>
    );
};

export default AvailableMeals;