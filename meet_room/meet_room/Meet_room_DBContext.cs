using Microsoft.EntityFrameworkCore;


public class Meet_room_DBContext: DbContext
{   
   protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite(@"Filename=Meet_room_database.db");
    }
    public DbSet<User> Users {get; set;}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(typeBuilder =>
            {
                typeBuilder
                     .ToTable("meet_room_database")
                    .HasKey(c => c.Id)
                        .HasName("ID");

                typeBuilder
                    .Property(h => h.UserName)
                    .HasMaxLength(500);

                typeBuilder
                    .Property(h => h.Password)
                    .HasColumnType("varchar(150)");

                typeBuilder
                        .Ignore(h => h.FullName);
            });
                    
                    
    }
}