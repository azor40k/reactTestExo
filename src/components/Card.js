function Card(props) {
  return (
    <section>
        <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt={props.imagealt} height="100px"/>
    </section>
  );
}

export default Card;
