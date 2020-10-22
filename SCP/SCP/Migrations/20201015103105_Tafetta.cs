using Microsoft.EntityFrameworkCore.Migrations;

namespace SCP.Migrations
{
    public partial class Tafetta : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Buyer",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BuyerName = table.Column<string>(nullable: true),
                    BuyerAddress = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Buyer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Color",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ColorName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Color", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Company",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyCode = table.Column<string>(nullable: true),
                    CompanyName = table.Column<string>(nullable: true),
                    CompanyAddress = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Company", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Country",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CountryCode = table.Column<string>(nullable: true),
                    CountryName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Country", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Currency",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CurrencyName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Currency", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cuttable",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CuttableWidth = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cuttable", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Express",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ExpressName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Express", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Fabric",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FabricType = table.Column<string>(nullable: true),
                    FabricDetails = table.Column<string>(nullable: true),
                    FabricSwatch = table.Column<string>(nullable: true),
                    SendingSample = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fabric", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GSM",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GSMValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GSM", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Registration",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registration", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Shipping",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ShippingTerm = table.Column<string>(nullable: true),
                    ShippingPort = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shipping", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Supplier",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SupplierName = table.Column<string>(nullable: true),
                    Origin = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Contact = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Supplier", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Zipper",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Brand = table.Column<string>(nullable: true),
                    Color = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zipper", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tafetta",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BuyerId = table.Column<int>(nullable: false),
                    FabricId = table.Column<int>(nullable: false),
                    ColorId = table.Column<int>(nullable: false),
                    FinishType = table.Column<string>(nullable: true),
                    CuttableId = table.Column<int>(nullable: false),
                    GSMId = table.Column<int>(nullable: false),
                    CurrentPrice = table.Column<string>(nullable: true),
                    TermOfPrice = table.Column<string>(nullable: true),
                    FOBSHANGHAI1 = table.Column<string>(nullable: true),
                    CNFCTG1 = table.Column<string>(nullable: true),
                    RemarksGSM = table.Column<string>(nullable: true),
                    ExFty = table.Column<string>(nullable: true),
                    COMMENTS1 = table.Column<string>(nullable: true),
                    SupplierId = table.Column<int>(nullable: false),
                    SupplierOriginId = table.Column<int>(nullable: false),
                    YearlyConsumeInYds = table.Column<string>(nullable: true),
                    PriceInAverage = table.Column<string>(nullable: true),
                    BDRepresentativeContact = table.Column<string>(nullable: true),
                    SupplierType = table.Column<string>(nullable: true),
                    Remarks = table.Column<string>(nullable: true),
                    ExpressId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tafetta", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tafetta_Buyer_BuyerId",
                        column: x => x.BuyerId,
                        principalTable: "Buyer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tafetta_Color_ColorId",
                        column: x => x.ColorId,
                        principalTable: "Color",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tafetta_Cuttable_CuttableId",
                        column: x => x.CuttableId,
                        principalTable: "Cuttable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tafetta_Express_ExpressId",
                        column: x => x.ExpressId,
                        principalTable: "Express",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tafetta_Fabric_FabricId",
                        column: x => x.FabricId,
                        principalTable: "Fabric",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tafetta_GSM_GSMId",
                        column: x => x.GSMId,
                        principalTable: "GSM",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tafetta_Supplier_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "Supplier",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tafetta_BuyerId",
                table: "Tafetta",
                column: "BuyerId");

            migrationBuilder.CreateIndex(
                name: "IX_Tafetta_ColorId",
                table: "Tafetta",
                column: "ColorId");

            migrationBuilder.CreateIndex(
                name: "IX_Tafetta_CuttableId",
                table: "Tafetta",
                column: "CuttableId");

            migrationBuilder.CreateIndex(
                name: "IX_Tafetta_ExpressId",
                table: "Tafetta",
                column: "ExpressId");

            migrationBuilder.CreateIndex(
                name: "IX_Tafetta_FabricId",
                table: "Tafetta",
                column: "FabricId");

            migrationBuilder.CreateIndex(
                name: "IX_Tafetta_GSMId",
                table: "Tafetta",
                column: "GSMId");

            migrationBuilder.CreateIndex(
                name: "IX_Tafetta_SupplierId",
                table: "Tafetta",
                column: "SupplierId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Company");

            migrationBuilder.DropTable(
                name: "Country");

            migrationBuilder.DropTable(
                name: "Currency");

            migrationBuilder.DropTable(
                name: "Registration");

            migrationBuilder.DropTable(
                name: "Shipping");

            migrationBuilder.DropTable(
                name: "Tafetta");

            migrationBuilder.DropTable(
                name: "Zipper");

            migrationBuilder.DropTable(
                name: "Buyer");

            migrationBuilder.DropTable(
                name: "Color");

            migrationBuilder.DropTable(
                name: "Cuttable");

            migrationBuilder.DropTable(
                name: "Express");

            migrationBuilder.DropTable(
                name: "Fabric");

            migrationBuilder.DropTable(
                name: "GSM");

            migrationBuilder.DropTable(
                name: "Supplier");
        }
    }
}
