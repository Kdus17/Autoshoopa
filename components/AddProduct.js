import CategoryDetails from "./Details/CategoryDetail";
import BrandDetails from "./Details/BrandDetail";

export default function AddProduct() {
  return (
    <form action="" method="POST">
      <div className="flex flex-col gap-8 px-8 py-10 items-center">
        <div className="flex flex-row gap-5">
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="photo"
          >
            Upload Photo
          </label>
          <input
            className="w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
            id="photo"
            type="file"
          />
        </div>
        <div className="flex flex-row gap-8">
          <input
            type="text"
            className="border-1 w-60 px-2"
            placeholder="Product_Name"
          />
        </div>
        <div className="flex flex-row">
          <input
            type="number"
            name=""
            id="price"
            className="border-1 w-60 px-2"
            placeholder="Price in Birr"
          />
        </div>
        <div>
          <textarea
            name=""
            id="descrption"
            className="border-1 w-60 px-2"
            placeholder="Enter Product Descrption"
          ></textarea>
        </div>
        <div className="flex flex-row items-center pl-12">
          <CategoryDetails inputType="radio" className="items-center" />
          <BrandDetails inputType="radio" />
        </div>

        <input
          type="submit"
          value="Submit"
          className="border-1 w-20 rounded-md"
          placeholder=""
        />
      </div>
    </form>
  );
}
