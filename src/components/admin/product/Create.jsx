import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { adminToken, apiUrl } from '../../common/http';
import JoditEditor from 'jodit-react';

const Create = ({ placeholder }) => {

  const [disable, setDisable] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();
  const Navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || 'Start typings...'
    }),
    [placeholder]
  );

  const saveProduct = async (data) => {
    setDisable(true);
    const formData = { ...data, "content": content, "gallery": gallery }
    const res = await fetch(`${apiUrl}/products`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'authorization': `Bearer ${adminToken()}`
      },
      body: JSON.stringify(formData)
    }).then(res => res.json())
      .then(result => {
        setDisable(false);
        if (result.status == 200) {
          toast.success(result.message);
          Navigate('/admin/products');
        } else {
          const formErrors = result.errors;
          Object.keys(formErrors).forEach((field) => {
            setError(field, { message: formErrors[field][0] })
          })
        }
      })
  }

  const fetchCategories = async (data) => {
    const res = await fetch(`${apiUrl}/categories`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'authorization': `Bearer ${adminToken()}`
      }
    }).then(res => res.json())
      .then(result => {
        if (result.status == 200) {
          setCategories(result.data);
        } else {
          console.log('something went wrong');
        }
      })
  }

  const fetchBrands = async (data) => {
    const res = await fetch(`${apiUrl}/brands`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'authorization': `Bearer ${adminToken()}`
      }
    }).then(res => res.json())
      .then(result => {
        if (result.status == 200) {
          setBrands(result.data);
        } else {
          console.log('something went wrong');
        }
      })
  }

  const handleFile = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);
    setDisable(true);

    const res = await fetch(`${apiUrl}/temp-images`, {
      method: 'POST',
      headers: {
        // 'Content-type' : 'application/json',
        'Accept': 'application/json',
        'authorization': `Bearer ${adminToken()}`
      },
      body: formData
    }).then(res => res.json())
      .then(result => {
        gallery.push(result.data.id);
        setGallery(gallery);

        galleryImages.push(result.data.image_url)
        setGalleryImages(galleryImages);
        setDisable(false);
        e.target.value = "";

      })

  }

  const deleteImage = (image) => {
    const newGallery = galleryImages.filter(gallery => gallery != image);
    setGallery(newGallery);
  }

  useEffect(() => {
    fetchCategories();
    fetchBrands();
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-between align-items-center mt-5 pb-3'>
          <h4 className='h4 pb-0 mb-0'>Products / Create</h4>
          <Link className="btn btn-primary" to="/admin/products">Back</Link>
        </div>
        <div className='col-md-3'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <form onSubmit={handleSubmit(saveProduct)}>
            <div className='card shadow'>
              <div className='card-body p-4'>
                <div className='mb-3'>
                  <label className='form-label'>Title</label>
                  <input {...register('title', {
                    required: 'The title field is required'
                  })} type='text' className={`form-control ${errors.title && 'is-invalid'}`} placeholder='Title' />
                  {errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>}
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='mb-3'>
                      <label className='form-label'>Category</label>
                      <select className={`form-control ${errors.category && 'is-invalid'}`} {...register('category', {
                        required: 'The category field is required'
                      })}>
                        <option value="">Select a category</option>
                        {categories && categories.map((category) => {
                          return (<option key={`brand-${category.id}`} value={category.id}>{category.name}</option>)
                        })}
                      </select>
                      {errors.category && <p className='invalid-feedback'>{errors.category?.message}</p>}
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='mb-3'>
                      <label className='form-label'>Brands</label>
                      <select className='form-control' {...register('brand')}>
                        <option value="">Select a brand</option>
                        {brands && brands.map((brand) => {
                          return (
                            <option key={`brand-${brand.id}`} value={brand.id}>{brand.name}</option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                </div>

                <div className='mb-3'>
                  <label className='form-label'>Short Description</label>
                  <textarea className='form-control' placeholder='Short Description'  {...register('short_description')}></textarea>
                </div>

                <div className='mb-3'>
                  <label className='form-label'>Description</label>
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  />
                </div>

                <h5 className='py-3 border-bottom mb-3'>Pricing</h5>

                <div className='row'>
                  <div className='col-md-6'>
                    <div className='mb-3'>
                      <label className='form-label'>Price</label>
                      <input type="text" placeholder='Price' className={`form-control ${errors.price && 'is-invalid'}`} {...register('price', {
                        required: 'The price field is required'
                      })} />
                      {errors.price && <p className='invalid-feedback'>{errors.price?.message}</p>}
                    </div>

                  </div>

                  <div className='col-md-6'>
                    <div className='mb-3'>
                      <label className='form-label'>Discounted Price</label>
                      <input type="text" placeholder='Discounted Price' className='form-control'  {...register('compare_price')} />
                    </div>
                  </div>
                </div>
                <h5 className='py-3 border-bottom mb-3'>Inventory</h5>

                <div className='row'>
                  <div className='col-md-6'>
                    <div className='mb-3'>
                      <label className='form-label'>Sku</label>
                      <input type="text" placeholder='Sku' className={`form-control ${errors.sku && 'is-invalid'}`} {...register('sku', {
                        required: 'The sku field is required'
                      })} />
                      {errors.sku && <p className='invalid-feedback'>{errors.sku?.message}</p>}
                    </div>

                  </div>

                  <div className='col-md-6'>
                    <div className='mb-3'>
                      <label className='form-label'>Barcode</label>
                      <input type="text" placeholder='Barcode' className='form-control'  {...register('barcode')} />
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                    <div className='mb-3'>
                      <label className='form-label'>Qty</label>
                      <input type="text" placeholder='Qty' className='form-control'  {...register('qty')} />
                    </div>

                  </div>

                  <div className='col-md-6'>
                    <div className='mb-3'>
                      <label className='form-label'>Status</label>
                      <select className={`form-control ${errors.status && 'is-invalid'}`} {...register('status', {
                        required: 'The status field is required'
                      })}>
                        <option value=''>Select a status</option>
                        <option value='1'>Active</option>
                        <option value='0'>Inactive</option>
                      </select>
                      {errors.status && <p className='invalid-feedback'>{errors.status?.message}</p>}
                    </div>
                  </div>
                </div>

                <div className='mb-3'>
                  <label className='form-label'>Feature Product</label>
                  <select className='form-control' {...register('is_featured')}>
                    <option value="">Select Feature product</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                <h5 className='py-3 border-bottom mb-3'>Gallery</h5>

                <div className='mb-3'>
                  <label className='form-label'>Image</label>
                  <input type="file" className='form-control' onChange={handleFile} />
                </div>

                <div className='mb-3'>
                  <div className='row'>
                    {galleryImages && galleryImages.map((image, index) => {
                      return (
                        <div className='col-md-3' key={index}>
                          <div className='card shadow'>
                            <img src={image} className='w-100' />
                          </div>
                            <button className='btn btn-danger  mt-3 w-100' onClick={() => deleteImage(image)}>Delete</button>
                        </div>
                      )
                    })}


                  </div>
                </div>

                <button type='submit' className='btn btn-primary mt-3' disabled={disable}>Create</button>
              </div>
            </div>

          </form>


        </div>
      </div>

    </div>
  )
}

export default Create