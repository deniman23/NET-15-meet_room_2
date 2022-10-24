using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace meet_room.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardsController: ControllerBase
    {
        public IEnumerable<Card> Get()
        {
            //DB
            
            return new[]
            {
                new Card {title = "Конференц-зал на Октябрьской", address = "ст.м. Октябрьская, ул. Независимости д.38", time = "8:00 - 22:00", price = "50$" },
                new Card {title = "Конференц-зал на Дзержинского", address = "ст.м. Грушевка, пр. Дзержинского д.20", time = "8:00 - 21:00", price = "55$" },
                new Card {title = "Конференц-зал на Притыцкого", address = "ст.м. Каменная горка, ул. Притыцкого д.40", time = "9:00 - 22:00", price = "45$" }
            };
        }
    }

    public class Card
    {
        public string title { get; set; }
        public string address { get; set; }
        public string time { get; set; }
        public string price { get; set; }
    }
}