using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

[Table("meet_room_database")]
public class User 
{
    [Key]
    [Column("ID")]
    public int Id { get; set; }

    [MaxLength(500)]
    public string UserName { get; set; }

    [Column(TypeName = "varchar(150)")]
    public string Password { get; set; }

    [NotMapped]
    public string FullName 
    {
        get
        {
            return UserName;
        }
    }
}