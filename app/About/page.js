"use client"
import React from "react";

const About=()=>{
  return (
    <>
      <div className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Education</h1>
          <div className="space-y-8">
            <div className="bg-gray-800 px-6 py-2 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">10th Grade</h2>
                <p className="text-xl text-cyan-400">St. Lawrence HighSchool</p>
              </div>
              <p className="text-xl font-bold text-cyan-400">92.00%</p>
            </div>

            <div className="bg-gray-800 px-6 py-2 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">12th Grade</h2>
                <p className="text-xl text-cyan-400">Spring Dales Jr. College</p>
              </div>
              <p className="text-xl font-bold text-cyan-400">92.00%</p>
            </div>

            <div className="bg-gray-800 px-6 py-2 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Bachelors Degree</h2>
                <p className="text-xl text-cyan-400">Pimpri Chinchwad College of Engineering</p>
              </div>
              <p className="text-xl font-bold text-cyan-400">7.99 CGPA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-800 text-white">
  <div className="container mx-auto px-8">
    <h1 className="text-4xl font-bold text-center mb-12">Book Shelf</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Book 1 */}
      <div className="relative group w-[300px] h-[450px] mx-auto rounded-lg overflow-hidden bg-cover bg-center" 
           style={{ backgroundImage: `url('https://wallpapercave.com/wp/wp7840589.jpg')` }}>
        <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4">
          <h2 className="text-xl font-bold">Rich Dad, Poor Dad</h2>
          <p>Learned about financial education and wealth-building mindset. Difference between assests and libalities.</p>
        </div>
      </div>

      {/* Book 2 */}
      <div className="relative group w-[300px] h-[450px] mx-auto rounded-lg overflow-hidden bg-cover bg-center" 
           style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71k7V0QvcdL._AC_UF1000,1000_QL80_.jpg')` }}>
        <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4">
          <h2 className="text-xl font-bold">Courage to be Disliked</h2>
          <p>Valuable lessons on living freely without concern for others’ judgment. Our all feelings are our choices.</p>
        </div>
      </div>

      {/* Book 3 */}
      <div className="relative group w-[300px] h-[450px] mx-auto rounded-lg overflow-hidden bg-cover bg-center" 
           style={{ backgroundImage: `url('https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982134488/think-like-a-monk-9781982134488_hr.jpg')` }}>
        <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4">
          <h2 className="text-xl font-bold">Think Like a Monk</h2>
          <p>Insights into mindfulness, meditation, and life balance. Attach ourself with people who have values that we want not the things we want.</p>
        </div>
      </div>

      {/* Book 4 */}
      <div className="relative group w-[300px] h-[450px] mx-auto rounded-lg overflow-hidden bg-cover bg-center" 
           style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/612ByvNe0TL._AC_UF1000,1000_QL80_.jpg')` }}>
        <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4">
          <h2 className="text-xl font-bold">Alchemist</h2>
          <p>Learned the importance of following one's dreams and listening to the heart, believe that fortune favours the brave.</p>
        </div>
      </div>

      {/* Book 5 */}
      <div className="relative group w-[300px] h-[450px] mx-auto rounded-lg overflow-hidden bg-cover bg-center" 
           style={{ backgroundImage: `url('https://prakashan.vrmvk.org/media/catalog/product/cache/ee0479ae4df1e9b633037b33fb3f2dac/S/w/Swami-Vivekananda-Samagra-Charitra-Khanda-3--Fr_4.jpg')` }}>
        <div className="absolute inset-0 bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4">
          <h2 className="text-xl font-bold">Swami Vivekananda Autobiography</h2>
          <p>Gained inspiration on spirituality, leadership, and self-discipline. Character and values over everything even success.</p>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default About;
