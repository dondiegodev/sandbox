import {
  carBrandList,
  carBrandMap,
  carBrands,
  nestedArrayCarBrands,
} from "@/app/array-mapped-object/data";

export function List() {
  const myCar = "toyota";
  //   const mySecondCar = "porsche"; // NOT ALLOWED

  return (
    <div className="space-y-4 font-mono">
      <div>
        <div className="font-bold">ARRAY + MAPPED OBJECT</div>
        {carBrandList.map((brand) => (
          <div key={brand}>
            {carBrands[brand].displayName} (Founded: {carBrands[brand].founded})
          </div>
        ))}
      </div>

      <div>
        <div>{carBrands[myCar].displayName}</div>
        <div>{carBrands.ford.founded}</div>
        {/* WON'T ALLOW undefined values */}
        {/* <div>{carBrands.ferrari.founded}</div>
				<div>{carBrands[mySecondCar].founded}</div> */}
      </div>

      {/* MAP */}
      <div>
        <div className="font-bold">MAP</div>
        {Array.from(carBrandMap.entries()).map(([brand, meta]) => (
          <div key={brand}>
            {meta.displayName} (Founded: {meta.founded})
          </div>
        ))}
      </div>

      {/* NOT GOOD BECAUSE IT COULD BE UNDEFINED */}
      <div>{carBrandMap.get("bmw")?.displayName}</div>
      {/* NOT ALLOWED */}
      {/* <div>{carBrandMap.get("ferrari")?.displayName}</div>
			<div>{carBrandMap.get(mySecondCar)?.displayName}</div> */}

      {/* NESTED ARRAY */}
      <div>
        <div className="font-bold">NESTED ARRAY</div>
        {nestedArrayCarBrands.map(([brand, meta]) => (
          <div key={brand}>
            {meta.displayName} (Founded: {meta.founded})
          </div>
        ))}
      </div>

      <div>
        {/* NOT POSSIBLE */}
        {/* {nestedArrayCarBrands["toyota"]} */}
      </div>
    </div>
  );
}
