using Microsoft.EntityFrameworkCore.Migrations;

namespace ASPReactApp.Migrations
{
    public partial class UpdateEvents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Categories",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HostedBy",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Events",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Categories",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "HostedBy",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Events");
        }
    }
}
