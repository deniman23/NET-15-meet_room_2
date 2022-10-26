using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


using db_ef;

namespace meet_room.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardsController: Controller
    {
        public IEnumerable<Card> Get()
        {
            //DB
            using (Card_db card_db = new Card_db())
            {
                Card card = new Card();
                card_db.Add(card);
                card_db.SaveChanges();
                
                 
                return (IEnumerable<Card>)card_db;
            }
        }
    }    
}