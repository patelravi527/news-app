import React from "react";

export default function NewsItems(props) {
  return (
    <>
      
          <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
            <a href={props.url} target="_blank" className="w-full block h-full">
              <img
                alt="blog photos"
                src={props.urlToImage ? props.urlToImage : 'https://via.placeholder.com/500' }
                className="h-80 w-full object-cover"
              />
              <div className="bg-white dark:bg-gray-800 w-full p-4">
                <p className="text-indigo-500 text-md font-medium">{props.name}</p>
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {props.title ? props.title.slice(0,45) : 'Title not define!'}...
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">{props.description ? props.description.slice(0,80) : 'Description not define!'}...</p>
                <div className="flex flex-wrap justify-starts items-center mt-4">
                  <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                    #{props.author ? props.author : 'Unknown Author!'}
                  </div>
                </div>
              </div>
            </a>
          </div>
    </>
  );
}
