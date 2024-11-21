export default async function getProduct(api) {
    try {
        console.log(api);
        let limitData = await fetch(api);
        limitData = await limitData.json();
        console.log(limitData);
        return limitData;
    } catch (error) {
        return error;
    }
}
