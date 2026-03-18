import React, { useState } from 'react'
import { assets,categories } from '../../public/assets/js/assets'
import { Link } from 'react-router-dom'

const CategoriesList = () => {

    const [openId, setOpenId] = useState(null);
    const toggleCategory = (id) => {
        setOpenId(openId === id ? null : id);
  };

  return (
      <div className="col-lg-3">
          <h1 className="h2 pb-4">Categories</h1>
          <ul className="list-unstyled templatemo-accordion">
            {categories.map((category)=>(
                <li className="pb-3">
                  <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" to="#" onClick={() => toggleCategory(category.id)}>
                      {category.name}
                      <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                  </Link>
                  <ul className={`collapse list-unstyled pl-3 ${ openId === category.id ? "show" : "" }`}>
                    {category.items.map((item, index)=>(
                        <li><Link className="text-decoration-none" to="#">{item}</Link></li>
                    ))}
                      
                  </ul>
              </li>
            ))}
          </ul>
      </div>
  )
}

export default CategoriesList