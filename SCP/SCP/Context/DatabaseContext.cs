using Microsoft.EntityFrameworkCore;
using SCP.Model;
using SCP.Model.Input;
using SCP.Model.Setting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SCP.Context
{
    public class DatabaseContext: DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Company> Company { get; set; }
        public DbSet<Supplier> Supplier { get; set; }
        public DbSet<Registration> Registration { get; set; }
        public DbSet<Zipper> Zipper { get; set; }
        public DbSet<Fabric> Fabric { get; set; }
        public DbSet<Buyer> Buyer { get; set; }
        public DbSet<Shipping> Shipping { get; set; }
        public DbSet<Color> Color { get; set; }
        public DbSet<Currency> Currency { get; set; }
        public DbSet<Country> Country { get; set; }
        public DbSet<Cuttable> Cuttable { get; set; }
        public DbSet<GSM> GSM { get; set; }
        public DbSet<Tafetta> Tafetta { get; set; }
        public DbSet<Express> Express { get; set; }
    }
}
