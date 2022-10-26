    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    public class Card
    {
        [Key]
        [Column("ID")]
        public int Id {get; set;}

        [MaxLength(500)]
        public string title { get; set; }

        [MaxLength(500)]
        public string address { get; set; }

        [MaxLength(500)]
        public string time { get; set; }

        [MaxLength(500)]
        public string price { get; set; }
    }
