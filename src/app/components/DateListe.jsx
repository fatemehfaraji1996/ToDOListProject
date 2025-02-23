import { format } from 'date-fns';

export default function DateLists() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'yyyy-MM-dd'); // فرمت تاریخ به صورت سال-ماه-روز

  const datesList1 = [formattedDate]; // لیست اول
  // const datesList2 = [formattedDate, formattedDate, formattedDate]; // لیست دوم

  return (
    <div>
   
    
        {datesList1.map((date, index) => (
          <p className='font-mono' key={index}>{date}</p>
        ))}
  
    </div>
  );
}