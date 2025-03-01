import Select from 'react-select'
import Upload from '../icons/UploadMedia.svg'

// Options for each select input goes here. Create more and replace
const categories = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
  { value: 'option-3', label: 'Option 3' },
  { value: 'option-4', label: 'Option 4' },
]
export default function Input() {
  return (
    <form className='font-campton flex flex-col my-[40px]'>
      <div className='flex md:flex-row flex-col gap-[40px]'>
        <div className='w-full flex flex-col gap-[26px]'>
          <label>
            <p className='pb-[7px]'>Product Category <span className='text-error-500'>*</span></p>
            <Select
              styles={{
                control: (provided) => ({
                  ...provided,
                  boxShadow: "none",
                  border: "none",
                  backgroundColor: "none",
                  
                })
              }}
              className='py-[12px] border-[#A1A4B6] border-[1.2px] rounded-[8px] w-[100%]'
              placeholder={<span>Select a Product Category</span>}
              options={categories}
            />
          </label>
          <label>
            <p className='pb-[7px]'>Product name <span className='text-error-500'>*</span></p>
            <input
              className='p-[16px] border border-[#A1A4B6] border-[1.2px] rounded-[8px] w-[100%]' 
              type="text" 
              placeholder='placeholder'
            />
          </label>
          <label>
            <p className='pb-[7px]'>Product prize <span className='text-error-500'>*</span></p>
            <input
              className='p-[16px] border border-[#A1A4B6] border-[1.2px] rounded-[8px] w-[100%]' 
              type="text" 
              placeholder='placeholder'
            />
          </label>
          <label>
            <p className='pb-[7px]'>Is the product available for swapping?<span className='text-error-500'>*</span></p>
            <Select
              styles={{
                control: (provided) => ({
                  ...provided,
                  boxShadow: "none",
                  border: "none",
                  backgroundColor: "none",
                  
                })
              }}
              className='py-[12px] border-[#A1A4B6] border-[1.2px] rounded-[8px] w-[100%]'
              placeholder={<span>placeholder</span>}
              options={categories}
            />
          </label>
          <label>
            <p className='pb-[7px]'>Product Condition <span className='text-error-500'>*</span></p>
            <Select
              styles={{
                control: (provided) => ({
                  ...provided,
                  boxShadow: "none",
                  border: "none",
                  backgroundColor: "none",
                  
                })
              }}
              className='py-[12px] border-[#A1A4B6] border-[1.2px] rounded-[8px] w-[100%]'
              placeholder={<span>placeholder</span>}
              options={categories}
            />
          </label>
        </div>
        <div className='w-full flex flex-col gap-[26px]'>
          <label>
              <p className='pb-[7px]'>Product Description <span className='text-error-500'>*</span></p>
              <textarea
                className='p-[16px] h-[121px] border border-[#A1A4B6] border-[1.2px] rounded-[8px] w-[100%]' 
                type="text" 
                placeholder='placeholder'
              />
          </label>
          {/* For the first page */}
          <label className='relative'>
              <p className='pb-[7px]'>Product Images <span className='text-error-500'>*</span></p>
              <div
                disabled
                className=' flex flex-col justify-center items-center gap-[8px] p-[16px] h-[202px] border border-[#A1A4B6] border-[1.2px] rounded-[8px] w-[100%] text-[14px]' 
                type="text" 
              >
                <img src={Upload} alt="upload" />
                <p>Drag and drop or <span className='text-primary-500 cursor-pointer'>Select</span> file from computer</p>
                <p>Max. 3 Images (in jpeg or png format only)</p>
              </div>
          </label>
        </div>
      </div>
      <button className='p-[18px] border border-primary-500 bg-primary-500 text-white hover:text-primary-500 hover:bg-white md:w-[40%] w-full mx-auto mt-[80px] rounded-[8px] transition duration-200'>Upload Now</button>
    </form>
  )
}