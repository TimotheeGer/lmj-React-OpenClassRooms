function Recommendation() {
    const currenMonth = new Date().getMonth()
    const isSpring = currenMonth >= 2 && currenMonth <= 5

    if (!isSpring) {

        return <div>Ce n'est pas le moment de rempoter</div>
    }
        return <div>C'est le printemps, rempotez</div>

}

export default Recommendation