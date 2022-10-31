using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


using db_ef;
using System.Linq;

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
                
                List<Card> cards_list = new List<Card>();
                
                cards_list.Add(card);
                
                return cards_list;
                
            }
        }
    }    
}