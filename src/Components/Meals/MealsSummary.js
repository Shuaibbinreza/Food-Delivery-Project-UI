import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Bangladeshi Foods</h2>
            <p>
                Choose your favourite food from the Menu and Let us Know where to deliver
            </p>
            <p>
                All the meals here are authentic Bangladeshi food prepared by Bangladeshi chefs
            </p>
        </section>
        
    );
};

export default MealsSummary;