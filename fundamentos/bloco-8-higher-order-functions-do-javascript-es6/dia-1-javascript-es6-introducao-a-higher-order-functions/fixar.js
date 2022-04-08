const waking = () => 'Acordando!!';

const coffeTime = () => 'Bora tomar café!!';

const goingSleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
}

doingThings(waking);
doingThings(coffeTime);
doingThings(goingSleep);