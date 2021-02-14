using Microsoft.EntityFrameworkCore.Migrations;

namespace ASPReactApp.Migrations
{
    public partial class Addtypetocomments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Comments",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "Comments");
        }
    }
}
