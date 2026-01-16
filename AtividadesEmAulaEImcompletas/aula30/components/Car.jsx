function Car({color, brand, ...rest}) {


    return (
    
    <h2>I love my {brand} {rest.model} !</h2>
    
    );
 
}
    
export default Car;