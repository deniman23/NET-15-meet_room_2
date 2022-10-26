using Microsoft.EntityFrameworkCore;

namespace db_ef{
public class Card_db: DbContext
{
   protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite(@"Filename=Card_db.db");
    }
        public DbSet<Card> Cards {get; set;}
        

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Card>(typeBuilder =>
        {
                typeBuilder
                     .ToTable("card_db")
                    .HasKey(c => c.Id)
                        .HasName("ID");

                typeBuilder
                    .Property(h => h.title)
                    .HasMaxLength(500);
                typeBuilder
                    .Property(h => h.address)
                    .HasMaxLength(500);
                typeBuilder
                    .Property(h => h.time)
                    .HasMaxLength(500);
                typeBuilder
                    .Property(h => h.price)
                    .HasMaxLength(500);
        });
    }
}
}