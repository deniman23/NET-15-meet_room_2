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
                Card card = new Card("Заголовок","Адрес","Время","Цена");
                card_db.Cards.Add(card);
                card_db.SaveChanges();
                

                return card_db.Cards.ToList<Card>();
            }
        }
    }    
}